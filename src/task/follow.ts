import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Bot } from "mineflayer";
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { Vec3 } from 'vec3';
import { Task } from "./task";

/**
 * Follow a moving entity
 */
export default class Follow extends  Task {
    private target: Vec3;

    constructor(bot: Bot, taskConfig: any) {
        super(bot, taskConfig);
        // Movement only
        this.actionSpace = new Discrete([2]);
        // Own position, target position, objects around
        this.observationSpace = new Discrete([2]);
        // Receive a reward multiplied by distance to target
        this.rewardRange = new Discrete([1]);
        if (!("target" in taskConfig)) {
            throw new Error('No target given to Follow-v0 task');
        }
        this.target = taskConfig.target;
    }

    public reset(): tf.Tensor {
        // TODO: should reset target position and agent position, how to ask that to server ?
        this.bot.chat(`/teleport ${this.bot.username} 0 0 0`)
        this.bot.chat(`/teleport ${this.target} 0 0 0`)
        return this.observationSpace.get();
    }

    public step(action: number): [tf.Tensor, number, boolean, {}] {
        return [this.observationSpace.get(), 0, false, {}];
    }
}