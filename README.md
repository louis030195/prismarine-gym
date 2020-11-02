# prismarine-gym
[![NPM version](https://img.shields.io/npm/v/prismarine-gym.svg)](http://npmjs.com/package/prismarine-gym)
[![Build Status](https://github.com/louis039195/prismarine-gym/workflows/CI/badge.svg)](https://github.com/louis039195/prismarine-gym/actions?query=workflow%3A%22CI%22)
[![Discord](https://img.shields.io/badge/chat-on%20discord-brightgreen.svg)](https://discord.gg/GsEFRM8)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg)](https://gitter.im/PrismarineJS/general)
[![Irc](https://img.shields.io/badge/chat-on%20irc-brightgreen.svg)](https://irc.gitter.im/)
[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/louis039195/prismarine-gym)

__Warning__: Under active development. APIs may change. Lot of trailing development code around.

Train minecraft agents using reinforcement learning

![alt](docs/treeChop.gif)

## Dependencies

- <https://www.docker.com> (preferred way for training, you could also workaround with bare-metal artefacts)
- <https://github.com/louis030195/gym.js> (until merged).
- Various tools from <https://github.com/PrismarineJS> for Minecraft stuff.
- <https://www.tensorflow.org/js> for deep learning (unfortunately tighted to a specific framework unlike in Python which has Numpy, but TFJS is great)

## Usage

```js
const PrismarineEnv = require('prismarine-gym').PrismarineEnv;
const { pathfinder } = require('mineflayer-pathfinder')
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
  await env.connect('ObtainItem-v0')
  env.bot.loadPlugin(pathfinder)
  // env.render(); // Uncomment to have web-visualisation using mineflayer-viewer
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

```

# TODO

- [ ] Implement a basic RL algo (preferably shallow learning since we can't have much data)
- [ ] Disable anti chat spam somehow
- [ ] More tasks (with level of difficulty impacting the degree of sparse / dense rewards and the observations fine-tuning)
- [ ] SCALE IT UP: `helm train ./train --set workers=200 --set agents=200` :)
- Could be nice to make it possible to run prismarine-gym in a background process while playing to minecraft, learning the policy (and building a dataset) of the human player. Then you tell many Minecraft players "launch this thing" with a noob-friendly tuto = gather data !
