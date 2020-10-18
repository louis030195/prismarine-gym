import Box from "gym-js/dist/spaces/box";
import { Task } from "./task";
import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';

/**
 * Follow a moving entity
 * observations: should know own position, target position, objects around, maybe more
 * actions: should be able to move
 */
export default class Follow implements Task {
    actionSpace: Box;
    observationSpace: Box;
    rewardRange: Discrete;
    parameterRandomization: object;
    curriculum?: object;

    reset(): tf.Tensor {
        return this.observationSpace.get();
    }

    step(action: number): [tf.Tensor, number, boolean, {}] {
        return [this.observationSpace.get(), 0, false, {}];
    }
}