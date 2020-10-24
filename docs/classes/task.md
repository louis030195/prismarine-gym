---
id: "task"
title: "Task"
sidebar_label: "Task"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [Task](task.md)

## Hierarchy

* **Task**

  ↳ [Follow](follow.md)

  ↳ [PathFind](pathfind.md)

  ↳ [TreeChop](treechop.md)

  ↳ [ObtainItem](obtainitem.md)

  ↳ [Survival](survival.md)

## Index

### Constructors

* [constructor](task.md#constructor)

### Properties

* [actionSpace](task.md#actionspace)
* [bot](task.md#protected-bot)
* [curriculum](task.md#protected-optional-curriculum)
* [observationSpace](task.md#observationspace)
* [parameterRandomization](task.md#protected-parameterrandomization)
* [rewardRange](task.md#rewardrange)
* [taskConfig](task.md#protected-taskconfig)

### Methods

* [reset](task.md#abstract-reset)
* [step](task.md#abstract-step)

## Constructors

###  constructor

\+ **new Task**(`bot`: Bot, `taskConfig`: any): *[Task](task.md)*

*Defined in [task/task.ts:20](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[Task](task.md)*

## Properties

###  actionSpace

• **actionSpace**: *Space*

*Defined in [task/task.ts:7](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L7)*

___

### `Protected` bot

• **bot**: *Bot*

*Defined in [task/task.ts:10](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L10)*

___

### `Protected` `Optional` curriculum

• **curriculum**? : *any*

*Defined in [task/task.ts:20](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L20)*

___

###  observationSpace

• **observationSpace**: *Space*

*Defined in [task/task.ts:8](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L8)*

___

### `Protected` parameterRandomization

• **parameterRandomization**: *any*

*Defined in [task/task.ts:17](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L17)*

___

###  rewardRange

• **rewardRange**: *Space*

*Defined in [task/task.ts:9](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L9)*

___

### `Protected` taskConfig

• **taskConfig**: *any*

*Defined in [task/task.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L15)*

## Methods

### `Abstract` reset

▸ **reset**(): *tf.Tensor*

*Defined in [task/task.ts:31](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L31)*

**Returns:** *tf.Tensor*

___

### `Abstract` step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Defined in [task/task.ts:34](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
