import * as tf from '@tensorflow/tfjs';
import { Bot } from "mineflayer";
import { Vec3 } from 'vec3';
import { Task } from "../task";

/**
 * Follow a moving entity
 */
export default class Follow extends  Task {
    private target: Vec3;

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