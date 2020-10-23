import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import Box from "gym-js/dist/spaces/box";
import { Bot } from "mineflayer";
import { goals, Movements, Pathfinder } from 'mineflayer-pathfinder';
import { Vec3 } from 'vec3';
import { Task } from "./task";

/**
 * The agent begins in a random starting location without any items, 
 * matching the normal starting conditions for human players in Minecraft. 
 * Each task variant requires the agent to obtain one instance of a separate item, 
 * from a set of frequently used items
 */
export default class ObtainItem extends  Task {
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