import * as tf from '@tensorflow/tfjs';
import { Space } from 'gym-js';
import { Bot } from 'mineflayer';
import { TaskConfig } from './taskConfig';

// TODO: see https://minerl.io/dataset/
export abstract class Task { // TODO: could have a param "difficulty" i.e. sparse vs dense rewards, less or more fine-tuned observations ... 
    public actionSpace: Space;
    public observationSpace: Space;
    public rewardRange: Space;
    /**
     * Task may use the bot to execute actions, collect observations and rewards.
     */
    protected bot: Bot;
    /**
     * Tasks may use the server to execute logic at specific states of the training (resettting map, task, positions ...).
     */
    protected server: any;
    /**
     * Contains information about the task (which object to follow ...). (TODO: and algorithm hyperparameters ?)
     */
    protected taskConfig?: TaskConfig; 
    // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#environment-parameter-randomization
    // randomization is essential to generalize, TODO: appropriate type, i.e. ts class ... not urgent
    protected parameterRandomization: any; 
    // bottom-up learning, you don't learn to run until you know how to walk
    // TODO: appropriate type, i.e. ts class ... not urgent
    protected curriculum?: any; // see https://github.com/Unity-Technologies/ml-agents/blob/release_8_docs/docs/Training-ML-Agents.md#curriculum
    
    constructor(bot: Bot, server: any, taskConfig: TaskConfig = null) { // TODO: fix TS flying-squid
        this.bot = bot;
        this.server = server;
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
