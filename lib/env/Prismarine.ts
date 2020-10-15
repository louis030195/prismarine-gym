import Env from 'gym-js/dist/core';
import Box from 'gym-js/dist/spaces/box';
import * as tf from '@tensorflow/tfjs';
import { Discrete, Space } from 'gym-js';
import { Bot, BotOptions, createBot } from 'mineflayer';
import { randomString } from '../utils/utils';

export default class PrismarineEnv implements Env {

  /**
   * @param server Minecraft server host
   * @param port Minecraft server port
   * @param observedEvents Minecraft server events sent to the agent and used as observation
   * @param allowedActions Minecraft server events sent to the agent and used as observation
   */
  constructor(options: BotOptions, observedEvents: string[], allowedActions: string[]) {
    this.action_space = new Box([0], [1])
    this.reward_range = new Discrete([2]);
    this.observation_space = new Box([0], [1]);
    this.observation_space.set(tf.tensor([0]));
    this.done = false;
    this.options = options;
  }

  action_space: Box;
  reward_range: Space;
  observation_space: Box;
  done: Boolean;
  bot: Bot;

  options: BotOptions;

  step(action: number): [tf.Tensor, number, boolean, {}] {
    return [this.observation_space.get(), 0, false, {}];
  }

  reset(): tf.Tensor {
    this.bot = createBot({
      host: this.options.host,
      port: this.options.port,
      username: this.options.username, // TODO: sort of agent ID
      //password: this.options.password,
      version: '1.16.1'
    });
    // setTimeout(() => {
      
    // }, 5000);
    return this.observation_space.get();
  }

  render(mode:string="html"): void {
    console.log('hello world')
  }

  close(): void {

  }

  seed(seed: number): void {}
}
