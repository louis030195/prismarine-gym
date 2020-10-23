import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Bot } from "mineflayer";
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { Vec3 } from 'vec3';
import { Task } from "./task";

/**
 * In addition to data on specific, designed tasks, we provide data in "Survival." 
 * This is the standard open-ended game mode used by most players. 
 * Starting from a random location without any items, 
 * players formulate their own high-level goals and obtain items to complete these goals.
 */
export default class Survival extends  Task {
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