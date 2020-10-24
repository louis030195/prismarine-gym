---
id: "index"
title: "prismarine-gym"
sidebar_label: "README"
---

[prismarine-gym](index.md) › [Globals](globals.md)

# prismarine-gym
[![NPM version](https://img.shields.io/npm/v/prismarine-gym.svg)](http://npmjs.com/package/prismarine-gym)
[![Build Status](https://github.com/louis039195/prismarine-gym/workflows/CI/badge.svg)](https://github.com/louis039195/prismarine-gym/actions?query=workflow%3A%22CI%22)
[![Discord](https://img.shields.io/badge/chat-on%20discord-brightgreen.svg)](https://discord.gg/GsEFRM8)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-brightgreen.svg)](https://gitter.im/PrismarineJS/general)
[![Irc](https://img.shields.io/badge/chat-on%20irc-brightgreen.svg)](https://irc.gitter.im/)
[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/louis039195/prismarine-gym)

__Warning__: Under active development. APIs may change. Lot of trailing development code around.

Train minecraft agents using reinforcement learning

## Dependencies

- <https://github.com/louis030195/gym.js> (until merged).
- Various tools from <https://github.com/PrismarineJS> for Minecraft stuff.
- <https://www.tensorflow.org/js> for deep learning (unfortunately tighted to a specific framework unlike in Python which has Numpy, but TFJS is great)

## Usage

```bash
examples/train.sh treeChop
```

# TODO

- Could be nice to make it possible to run prismarine-gym in a background process while playing to minecraft, learning the policy (and building a dataset) of the human player. Then you tell many Minecraft players "launch this thing" with a noob-friendly tuto = gather data !
