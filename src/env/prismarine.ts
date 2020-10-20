import * as tf from '@tensorflow/tfjs';
import { Space } from 'gym-js';
import Env from 'gym-js/dist/core';
import { Bot, BotOptions, createBot } from 'mineflayer';
import { Task } from '../task/task';
import { taskList } from '../task/taskList';

export class PrismarineEnv implements Env {
  public task: Task;
  public actionSpace: Space;
  public rewardRange: Space;
  public observationSpace: Space;
  public done: boolean;
  public bot: Bot;
  private options: BotOptions;
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
  constructor(options: BotOptions, task: string, taskConfig: any) {
    if (!(task in taskList)) {
      throw new Error(`Invalid task ${task}`);
    }
    this.done = false;
    this.options = options;

    this.bot = createBot({
      host: this.options.host,
      port: this.options.port,
      username: this.options.username, // TODO: sort of agent ID
      // password: this.options.password, // I suppose it could be interesting for inference on real server later
      version: '1.16.1'
    });
    this.task = new taskList[task](this.bot, taskConfig);
    this.actionSpace = this.task.actionSpace;
    this.rewardRange = this.task.rewardRange;
    this.observationSpace = this.task.observationSpace;
  }

  public step(action: number): [tf.Tensor, number, boolean, {}] {
    return this.task.step(action);
  }

  public reset(): tf.Tensor {
    return this.task.reset();
  }

  public render(mode: string='html'): void {
    // TODO: https://github.com/PrismarineJS/prismarine-viewer
  }

  public close(): void {
    //
  }

  public seed(seed: number): void {
    //
  }
}
