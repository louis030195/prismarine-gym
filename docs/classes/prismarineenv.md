---
id: "prismarineenv"
title: "PrismarineEnv"
sidebar_label: "PrismarineEnv"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [PrismarineEnv](prismarineenv.md)

## Hierarchy

* **PrismarineEnv**

## Implements

* any

## Index

### Constructors

* [constructor](prismarineenv.md#constructor)

### Properties

* [actionSpace](prismarineenv.md#actionspace)
* [bot](prismarineenv.md#bot)
* [done](prismarineenv.md#done)
* [observationSpace](prismarineenv.md#observationspace)
* [options](prismarineenv.md#private-options)
* [rewardRange](prismarineenv.md#rewardrange)
* [task](prismarineenv.md#task)

### Methods

* [close](prismarineenv.md#close)
* [log](prismarineenv.md#log)
* [render](prismarineenv.md#render)
* [reset](prismarineenv.md#reset)
* [seed](prismarineenv.md#seed)
* [step](prismarineenv.md#step)

## Constructors

###  constructor

\+ **new PrismarineEnv**(`options`: BotOptions, `task`: string, `taskConfig`: any): *[PrismarineEnv](prismarineenv.md)*

*Defined in [env/prismarine.ts:18](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BotOptions |
`task` | string |
`taskConfig` | any |

**Returns:** *[PrismarineEnv](prismarineenv.md)*

## Properties

###  actionSpace

• **actionSpace**: *Space*

*Defined in [env/prismarine.ts:13](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L13)*

___

###  bot

• **bot**: *Bot*

*Defined in [env/prismarine.ts:17](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L17)*

___

###  done

• **done**: *boolean*

*Defined in [env/prismarine.ts:16](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L16)*

___

###  observationSpace

• **observationSpace**: *Space*

*Defined in [env/prismarine.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L15)*

___

### `Private` options

• **options**: *BotOptions*

*Defined in [env/prismarine.ts:18](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L18)*

___

###  rewardRange

• **rewardRange**: *Space*

*Defined in [env/prismarine.ts:14](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L14)*

___

###  task

• **task**: *[Task](task.md)*

*Defined in [env/prismarine.ts:12](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L12)*

## Methods

###  close

▸ **close**(): *void*

*Defined in [env/prismarine.ts:57](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L57)*

**Returns:** *void*

___

###  log

▸ **log**(`message`: string, `printToConsole`: boolean): *void*

*Defined in [env/prismarine.ts:70](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L70)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | message to log |
`printToConsole` | boolean | false | whether to print to console, default false  |

**Returns:** *void*

___

###  render

▸ **render**(`mode`: string): *void*

*Defined in [env/prismarine.ts:52](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L52)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mode` | string | "html" |

**Returns:** *void*

___

###  reset

▸ **reset**(): *tf.Tensor*

*Defined in [env/prismarine.ts:48](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L48)*

**Returns:** *tf.Tensor*

___

###  seed

▸ **seed**(`seed`: number): *void*

*Defined in [env/prismarine.ts:61](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | number |

**Returns:** *void*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Defined in [env/prismarine.ts:44](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/env/prismarine.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
