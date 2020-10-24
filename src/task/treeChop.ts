import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Block } from 'minecraft-data';
import { Bot } from "mineflayer";
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { Vec3 } from 'vec3';
import { clip } from '../utils';
import { Task } from "./task";

/**
 * In treechop, the agent must collect as much wood as possible
 */
export default class TreeChop extends  Task {
    private movements?: Movements;
    private lastDistanceToWood : number = 2**8;
    constructor(bot: Bot, taskConfig: any) {
        super(bot, taskConfig);
        // Can pick a destination in a small box around,  action[3] is digging decision
        this.actionSpace = new Box([-5, -5, -5, 0], [5, 5, 5, 1]); // TODO: parametrize
        this.observationSpace = new Discrete([6]);
        this.rewardRange = new Discrete([1]);
        this.movements = new Movements(bot, require('minecraft-data')(bot.version));
    }

    public reset(): tf.Tensor {
        return this.observationSpace.get();
    }

    public step(action: number): [tf.Tensor, number, boolean, {}] {
        // Observations //
        // see https://github.com/PrismarineJS/mineflayer/blob/master/docs/api.md#botfindblocksoptions
        const woodBlock = this.bot.findBlock({ matching: b => b.material === 'wood', maxDistance: 50 });
        // Aware of its own position and the position of the closest wood block (or 0,0,0)
        this.observationSpace.set(tf.tensor([
            this.bot.entity.position.x, 
            this.bot.entity.position.y, 
            this.bot.entity.position.z,
            woodBlock !== null ? woodBlock.position.x : 0, // 0 = no wood around, could set 2**8 or something
            woodBlock !== null ? woodBlock.position.y : 0, // but it's just a matter of pattern recognition
            woodBlock !== null ? woodBlock.position.z : 0 // the bot should learn that 0 means no wood (hopefully there is no wood on 0)
        ]));
        // Actions //
        // @ts-expect-error
        const pathfinder: Pathfinder = this.bot.pathfinder;
        if (this.movements) { pathfinder.setMovements(this.movements); }
        pathfinder.setGoal(new goals.GoalNear(action[0], action[1], action[2], 1));
        if (woodBlock !== null && this.bot.canDigBlock(woodBlock)) { // Assuming the bot can't be currently digging if he can't dig
            action[3] > 0.5 ? this.bot.dig(woodBlock, _ => { /* ignored ? */ }) : this.bot.stopDigging();
        }

        // Rewards //
        let reward = -1; // negative reward at each step ?
        // Reward if getting closer to wood blocks, otherwise punish (dense as hell)
        reward += woodBlock === null ? 0 : this.lastDistanceToWood < this.bot.entity.position.distanceTo(woodBlock.position) ? 1 : -1; 
        // TODO: gathered a wood block / dig a wood block / get closer to wood block

        this.lastDistanceToWood = woodBlock === null ? this.lastDistanceToWood : this.bot.entity.position.distanceTo(woodBlock.position);
        return [this.observationSpace.get(), reward, false, { distanceToWood: this.lastDistanceToWood }];
    }
}
