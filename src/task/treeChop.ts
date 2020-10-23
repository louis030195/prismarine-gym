import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Bot } from "mineflayer";
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { Vec3 } from 'vec3';
import { Task } from "./task";

/**
 * In treechop, the agent must collect as much wood as possible
 */
export default class TreeChop extends  Task {
    constructor(bot: Bot, taskConfig: any) {
        super(bot, taskConfig);
        this.actionSpace = new Discrete([2]);
        this.observationSpace = new Discrete([2]);
        this.rewardRange = new Discrete([1]);
    }

    public reset(): tf.Tensor {
        return this.observationSpace.get();
    }

    public step(action: number): [tf.Tensor, number, boolean, {}] {
        return [this.observationSpace.get(), 0, false, {}];
    }
}