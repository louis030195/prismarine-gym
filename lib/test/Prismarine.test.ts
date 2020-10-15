import PrismarineEnv from '../env/Prismarine';
import { createBot } from 'mineflayer';
import { createMCServer } from 'flying-squid';
import { randomString } from '../utils/utils';


describe('PrismarineEnv', () => {
  const port = 25565
  const version = '1.16.1'


  it('e', () => {
    // createMCServer({
    //   'motd': 'A Minecraft Server \nRunning flying-squid',
    //   'port': port,
    //   'max-players': 10,
    //   'online-mode': false,
    //   'logging': true,
    //   'gameMode': 1,
    //   'difficulty': 1,
    //   'worldFolder':'world',
    //   'generation': {
    //     'name': 'diamond_square',
    //     'options':{
    //       'worldHeight': 80
    //     }
    //   },
    //   'kickTimeout': 10000,
    //   'plugins': {

    //   },
    //   'modpe': false,
    //   'view-distance': 10,
    //   'player-list-text': {
    //     'header':'Flying squid',
    //     'footer':'Test server'
    //   },
    //   'everybody-op': true,
    //   'max-entities': 100,
    //   'version': version
    // })
    let env = new PrismarineEnv({
      host: '172.18.0.1',
      username: randomString(15),
      port: port,
      version: version
    }, [], []);
    env.reset();
  });
  // it('env', () => {
  //   expect(env).toBeDefined();
  //   console.log(JSON.stringify(env))
  // });
  // it('action space', () => {
  //   expect(env.action_space).toBeDefined();
  // });
  // it('observation space', () => {
  //   expect(env.observation_space).toBeDefined();
  // });

  // it('steps', () => {
  //   let action = env.action_space.sample();
  //   env.step(action[0]);
  // });
});
