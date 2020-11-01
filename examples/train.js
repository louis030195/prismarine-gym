const PrismarineEnv = require('../dist/index').PrismarineEnv;
const { pathfinder } = require('mineflayer-pathfinder')
const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .help('h') // TODO: print implemented tasks
  .option('task', {
    alias: 't',
    type: 'string',
    default: 'TreeChop-v0',
    description: 'Task to execute'
  })
  .argv

const port = 25565
const version = '1.16.1'
let env = new PrismarineEnv({
  host: 'localhost',
  port: port,
  username: 'singularity',
  version: version
},
  {
    'motd': 'A Minecraft Server training reinforcement learning agent',
    'port': port,
    'max-players': 10,
    'online-mode': false,
    'logging': true,
    'gameMode': 1,
    'generation': {
      'name': 'diamond_square',
      'options': {
        'worldHeight': 80
      }
    },
    'kickTimeout': 10000,
    'plugins': {},
    'modpe': false,
    'view-distance': 10,
    'version': version,
    'player-list-text': {
      header: { text: 'Flying squid' },
      footer: { text: 'RL server' }
    }
  })
const start = async () => {
  await env.connect(argv.task)
  env.bot.loadPlugin(pathfinder) // TODO: can move this to lib ?
  env.log('Spawned !')
  // env.render();
  const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs))
  env.bot.on('chat', async (username, message) => {
    if (username === env.bot.username) return
    if (message === 'task') {
      let observation = env.reset()
      for (const x of Array(10000).keys()) {
        let action = env.actionSpace.sample()
        let actionAsArray = await action.array();
        actionAsArray[0] += env.bot.entity.position.x
        actionAsArray[1] += env.bot.entity.position.y
        actionAsArray[2] += env.bot.entity.position.z
        let [observation, reward, done, info] = env.step(actionAsArray)
        env.log(`{ "Action": ${action},\n"Observation": ${observation},\n"Reward": ${reward},\n"Done": ${done},\n"Info": ${info}}\n`, true)
        if (done) observation = env.reset()
        await sleep(1000)
      }
      env.close();
    }
  })
}

start()
