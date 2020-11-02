import * as tf from '@tensorflow/tfjs';
import { Discrete } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Bot } from 'mineflayer';
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { performance } from 'perf_hooks';
import { Vec3 } from 'vec3';
import { Task } from "../task";
import { TaskConfig } from '../taskConfig';
import { ObtainItemConfig } from './obtainItemConfig';

/**
 * In obtainItem-v0, the agent must collect as much of a given block as possible
 */
export default class ObtainItem extends Task {
    private movements?: Movements;
    private lastDistanceToBlock: number = 2 ** 8;
    private timeSinceLastReset: number;
    constructor(bot: Bot, server: any, taskConfig: TaskConfig) {
        super(bot, server, taskConfig);
        this.taskConfig = this.taskConfig === null ? new ObtainItemConfig() : this.taskConfig;
        // [walk vec3, dig bool, dig vec3]
        const maxWalkDistance = (this.taskConfig as ObtainItemConfig).maxWalkDistance;
        this.actionSpace = new Box([-maxWalkDistance, -maxWalkDistance, -maxWalkDistance, 0, -1, -1, -1], 
            [maxWalkDistance, maxWalkDistance, maxWalkDistance, 1, 1, 1, 1]);
        this.observationSpace = new Discrete([6]);
        this.rewardRange = new Discrete([1]);
        this.movements = new Movements(bot, require('minecraft-data')(bot.version));
        this.timeSinceLastReset = performance.now();
    }

    public reset(): tf.Tensor {
        this.bot.chat(`/teleport ${this.bot.username} 10 100 10`);
        // TODO: reset map
        this.timeSinceLastReset = performance.now();
        return this.observationSpace.get();
    }

    public step(action: number): [tf.Tensor, number, boolean, {}] {
        let done = false;
        // Observations //
        // see https://github.com/PrismarineJS/mineflayer/blob/master/docs/api.md#botfindblocksoptions
        const closestWantedBlock = this.bot.findBlock({ matching: b => 
            b.material === (this.taskConfig as ObtainItemConfig).blockMaterial, 
            maxDistance: (this.taskConfig as ObtainItemConfig).maxFindBlockDistance });
        // Aware of its own position and the position of the closest block (or 0,0,0)
        this.observationSpace.set(tf.tensor([
            this.bot.entity.position.x,
            this.bot.entity.position.y,
            this.bot.entity.position.z, // TODO: Sparser observation would be chunk around agent
            closestWantedBlock !== null ? closestWantedBlock.position.x : 0, // 0 = no X block around
            closestWantedBlock !== null ? closestWantedBlock.position.y : 0,
            closestWantedBlock !== null ? closestWantedBlock.position.z : 0 // the bot should learn that 0 means no block
        ]));
        // Actions //
        // @ts-expect-error
        const pathfinder: Pathfinder = this.bot.pathfinder;
        if (this.movements) { pathfinder.setMovements(this.movements); }
        const pos = this.bot.entity.position;
        pathfinder.setGoal(new goals.GoalNear(action[0]+pos.x, action[1]+pos.y, action[2]+pos.z, 1));
        
        // TODO: should have the possibility to dig a block around instead, the algo would decide
        const diggedBlock = this.bot.blockAt(this.bot.entity.position.offset(action[3], action[4], action[5]));
        if (diggedBlock !== null && this.bot.canDigBlock(diggedBlock) && this.bot.entity.position.distanceTo(diggedBlock.position) < 1) { // Assuming the bot can't be currently digging if he can't dig
            // TODO: server flying-squid crash sometime when digging ?    
            action[3] >  0.5 ? this.bot.dig(diggedBlock, _ => { /* ignored ? */ }) : this.bot.stopDigging();
        }

        // Rewards //
        let reward = -1; // negative reward at each step ?
        // Reward if getting closer to blocks, otherwise punish (dense as hell)
        reward += closestWantedBlock === null || this.lastDistanceToBlock > this.bot.entity.position.distanceTo(closestWantedBlock.position) ? -1 : 1;
        // TODO: gathered a block / dig a block / get closer to block

        // abritrary reset after X time
        done = performance.now() - this.timeSinceLastReset > this.taskConfig.arbitraryResetDelay;
        if (done) { this.bot.chat('I\'m done !'); }
        this.lastDistanceToBlock = closestWantedBlock === null ? this.lastDistanceToBlock : this.bot.entity.position.distanceTo(closestWantedBlock.position);
        return [this.observationSpace.get(), reward, done, { distanceToBlock: this.lastDistanceToBlock }];
    }
}
