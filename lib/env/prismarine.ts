import Env from 'gym-js/dist/core';
import Box from 'gym-js/dist/spaces/box';
import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import { Bot, BotOptions, createBot } from 'mineflayer';
import { randomString } from '../utils/utils';
import { Task } from '../tasks/task';
import { tasks } from '../tasks/taskList';

export default class PrismarineEnv implements Env {

  /**
   * @param server Minecraft server host
   * @param port Minecraft server port
   * 
   * Usage
   * ```js
   * let env = new PrismarineEnv('ClimbTrees-v0')
   * // or
   * let env = new PrismarineEnv('Follow-v0')
   * ```
   */
  constructor(options: BotOptions, task: string) {
    if (!(task in tasks)) throw new Error(`Invalid task ${task}`);
    this.task = tasks[task];
    this.action_space = this.task.actionSpace;
    this.reward_range = this.task.rewardRange;
    this.observation_space = this.task.observationSpace;
    this.done = false;
    this.options = options;

    this.bot = createBot({
      host: this.options.host,
      port: this.options.port,
      username: this.options.username, // TODO: sort of agent ID
      //password: this.options.password, // I suppose it could be interesting for inference on real server later
      version: '1.16.1'
    });
  }

  task: Task;
  action_space: Space; // TODO: PR / fix gym.js f**** snake case
  reward_range: Space;
  observation_space: Space;
  done: Boolean;
  bot: Bot;

  options: BotOptions;

  step(action: number): [tf.Tensor, number, boolean, {}] {
    return this.task.step(action);
  }

  reset(): tf.Tensor {
    return this.task.reset();
  }

  render(mode:string='html'): void {
    // TODO: https://github.com/PrismarineJS/prismarine-viewer
  }

  close(): void {
  }

  seed(seed: number): void {}
}
