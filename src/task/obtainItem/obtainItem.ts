import * as tf from '@tensorflow/tfjs';
import { Bot } from "mineflayer";
import { Task } from "../task";

/**
 * The agent begins in a random starting location without any items, 
 * matching the normal starting conditions for human players in Minecraft. 
 * Each task variant requires the agent to obtain one instance of a separate item, 
 * from a set of frequently used items
 */
export default class ObtainItem extends  Task {
    constructor(bot: Bot, server: any, taskConfig: any) {
        super(bot, server, taskConfig);
        throw new Error("Not implemented");
    }

    public reset(): tf.Tensor {
        return this.observationSpace.get();
    }

    public step(action: number): [tf.Tensor, number, boolean, {}] {
        return [this.observationSpace.get(), 0, false, {}];
    }
}