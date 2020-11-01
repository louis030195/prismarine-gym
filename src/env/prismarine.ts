import * as tf from '@tensorflow/tfjs';
import { Space } from 'gym-js';
import Env from 'gym-js/dist/core';
import { Bot, BotOptions, createBot } from 'mineflayer';
// tslint:disable-next-line: no-var-requires
const mineflayerViewer = require('prismarine-viewer').mineflayer

import { createMCServer } from 'flying-squid';
import { Task } from '../task/task';
import { TaskConfig } from '../task/taskConfig';
import { taskList } from '../task/taskList';

export class PrismarineEnv implements Env {
  public task: Task;
  public actionSpace: Space;
  public rewardRange: Space;
  public observationSpace: Space;
  public done: boolean;
  public bot: Bot;
  private botOptions: BotOptions;
  private serverOptions?: any;
  /**
   * @param botOptions [mineflayer](https://github.com/PrismarineJS/mineflayer) options.
   * @param serverOptions [flying-squid](https://github.com/PrismarineJS/flying-squid) options, 
   * leave null if not running local server, i.e. running inference on real server for example.
   * 
   * Usage
   * ```js
   * let botOptions = {} // Some [mineflayer](https://github.com/PrismarineJS/mineflayer) options
   * let serverOptions = {} // Some [flying-squid](https://github.com/PrismarineJS/flying-squid) options
   * let env = new PrismarineEnv(botOptions, serverOptions)
   * // Or using an existing server (multi-agent scenario or real server inference typically)
   * env = new PrimsarineEnv(botOptions)
   * ```
   */
  constructor(botOptions: BotOptions, serverOptions: any = null) { // TODO: may abstract and hide low level config stuff
    this.done = false;
    this.botOptions = botOptions;
    this.serverOptions = serverOptions;
  }

  /**
   * Usage
   * ```js
   * await env.connect('TreeChop-v0', { spawnMonsters: true }, 5000)
   * ```
   * @param task Task to execute
   * @param taskConfig Task configuration
   * @param timeoutDelay Timeout delay to connect to server
   */
  public async connect(task: string, taskConfig: TaskConfig = null, timeoutDelay: number = 5000): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if the given task is valid
      if (!(task in taskList)) {
        throw new Error(`Invalid task ${task}`);
      }
      const initBot = (s?: any) => {
        this.bot = createBot(this.botOptions);
        // Once spawned, initialize the task and resolve
        this.bot.once('spawn', () => {
          this.task = new taskList[task](this.bot, s, taskConfig);
          this.actionSpace = this.task.actionSpace;
          this.rewardRange = this.task.rewardRange;
          this.observationSpace = this.task.observationSpace;
          resolve();
        });
      }

      // Timeout if couldn't connect to server
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject(`Timed out in  ${timeoutDelay} ms.`);
      }, timeoutDelay);

      // Use case if we don't want to run a server but connecting to an existing one 
      // (multi-agent or inference on real server for example)
      if (this.serverOptions === null) {
        initBot();
        return;
      }

      // this.serverOptions.plugins['treeChop'] = require('../serverPlugins/treeChop')
      // Spawn Minecraft server
      const server = createMCServer(this.serverOptions);

      // Once the server is ready for connection, connect the bot
      server.once('listening', () => initBot(server));
    })
  }

  public step(action: number): [tf.Tensor, number, boolean, {}] {
    return this.task.step(action);
  }

  public reset(): tf.Tensor {
    return this.task.reset();
  }

  public render(mode: string = 'html'): void {
    // see: https://github.com/PrismarineJS/prismarine-viewer
    mineflayerViewer(this.bot, { port: 3000 }) // Start the viewing server on port 3000
  }

  public close(): void {
    //
  }

  public seed(seed: number): void {
    //
  }

  /**
   * Log message to chat or to console if wanted
   * @param message message to log
   * @param printToConsole whether to print to console, default false
   */
  public log(message: string, printToConsole: boolean = false): void {
    // tslint:disable-next-line: no-console
    printToConsole ? console.log(message) : this.bot.chat(message);
  }
}
