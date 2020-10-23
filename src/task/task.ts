import * as tf from '@tensorflow/tfjs';
import { Space } from 'gym-js';
import { Bot } from 'mineflayer';

// TODO: see https://minerl.io/dataset/
export abstract class Task {
    public actionSpace: Space;
    public observationSpace: Space;
    public rewardRange: Space;
    protected bot: Bot;
    /**
     * Contains information about the task (which object to follow ...) (TODO: and algorithm hyperparameters ?)
     */
    // TODO: prob config class ?
    protected taskConfig: any; // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#environment-parameter-randomization
    // randomization is essential to generalize, TODO: appropriate type, i.e. ts class ... not urgent
    protected parameterRandomization: any; 
    // bottom-up learning, you don't learn to run until you know how to walk
    // TODO: appropriate type, i.e. ts class ... not urgent
    protected curriculum?: any; // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#curriculum
    
    constructor(bot: Bot, taskConfig: any) { 
        this.bot = bot;
        this.taskConfig = taskConfig;
    }
    
    // why do we want to wrap reset ? because each task will have different configuration, i.e. you can learn to climb trees close to a forest
    // but if the task require to be achieved in the desert ?
    // TODO: it should re-initialize the training environment according to a given task
    // i.e. "learning how to climb trees" -> reset position, "learning how to hit creatures with bow" -> restore arrows, revive creeps ...
    public abstract reset(): tf.Tensor
    // why do we want to wrap step in task ? because each task will have different goal, therefore different
    // rewards, different condition to make the episode "done"
    public abstract step(action: number): [tf.Tensor, number, boolean, {}];

}

