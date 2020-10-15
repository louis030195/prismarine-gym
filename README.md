# prismarine-gym
[![NPM version](https://img.shields.io/npm/v/prismarine-template.svg)](http://npmjs.com/package/prismarine-template)
[![Build Status](https://github.com/PrismarineJS/prismarine-template/workflows/CI/badge.svg)](https://github.com/PrismarineJS/prismarine-template/actions?query=workflow%3A%22CI%22)
[![Discord](https://img.shields.io/badge/chat-on%20discord-brightgreen.svg)](https://discord.gg/GsEFRM8)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg)](https://gitter.im/PrismarineJS/general)
[![Irc](https://img.shields.io/badge/chat-on%20irc-brightgreen.svg)](https://irc.gitter.im/)
[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/PrismarineJS/prismarine-template)

__Warning__: Under active development. APIs may change.

Train minecraft agents using reinforcement learning

## Usage

```js
import { PrismarineEnv } from "prismarine-gym";

let env = new PrismarineEnv();
let observation = env.reset();
for (const x of Array(1000).keys()) {
  env.render();
  let action = env.action_space.sample();
  observation, reward, done, info = env.step(action);
  if (done) observation = env.reset();
}
env.close();
```
