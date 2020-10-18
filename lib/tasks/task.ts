import * as tf from '@tensorflow/tfjs';
import Box from 'gym-js/dist/spaces/box';
import { Discrete, Space } from 'gym-js';


export interface Task { // TODO: naming convention file upper or lower camel ?
    actionSpace: Space;
    observationSpace: Space;
    rewardRange: Space;
    // randomization is essential to generalize, TODO: appropriate type, i.e. ts class ... not urgent
    parameterRandomization: object; // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#environment-parameter-randomization
    // bottom-up learning, you don't learn to run until you know how to walk
    // TODO: appropriate type, i.e. ts class ... not urgent
    curriculum?: object; // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#curriculum
    // why do we want to wrap reset ? because each task will have different configuration, i.e. you can learn to climb trees close to a forest
    // but if the task require to be achieved in the desert ?
    // TODO: it should re-initialize the training environment according to a given task
    // i.e. "learning how to climb trees" -> reset position, "learning how to hit creatures with bow" -> restore arrows, revive creeps ...
    reset(): tf.Tensor
    // why do we want to wrap step in task ? because each task will have different goal, therefore different
    // rewards, different condition to make the episode "done"
    step(action: number): [tf.Tensor, number, boolean, {}];
}