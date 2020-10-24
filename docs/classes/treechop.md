---
id: "treechop"
title: "TreeChop"
sidebar_label: "TreeChop"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [TreeChop](treechop.md)

## Hierarchy

* [Task](task.md)

  ↳ **TreeChop**

## Index

### Constructors

* [constructor](treechop.md#constructor)

### Properties

* [actionSpace](treechop.md#actionspace)
* [bot](treechop.md#protected-bot)
* [curriculum](treechop.md#protected-optional-curriculum)
* [movements](treechop.md#private-optional-movements)
* [observationSpace](treechop.md#observationspace)
* [parameterRandomization](treechop.md#protected-parameterrandomization)
* [rewardRange](treechop.md#rewardrange)
* [taskConfig](treechop.md#protected-taskconfig)

### Methods

* [reset](treechop.md#reset)
* [step](treechop.md#step)

## Constructors

###  constructor

\+ **new TreeChop**(`bot`: Bot, `taskConfig`: any): *[TreeChop](treechop.md)*

*Overrides [Task](task.md).[constructor](task.md#constructor)*

*Defined in [task/treeChop.ts:18](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/treeChop.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[TreeChop](treechop.md)*

## Properties

###  actionSpace

• **actionSpace**: *Space*

*Inherited from [Task](task.md).[actionSpace](task.md#actionspace)*

*Defined in [task/task.ts:7](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L7)*

___

### `Protected` bot

• **bot**: *Bot*

*Inherited from [Task](task.md).[bot](task.md#protected-bot)*

*Defined in [task/task.ts:10](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L10)*

___

### `Protected` `Optional` curriculum

• **curriculum**? : *any*

*Inherited from [Task](task.md).[curriculum](task.md#protected-optional-curriculum)*

*Defined in [task/task.ts:20](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L20)*

___

### `Private` `Optional` movements

• **movements**? : *Movements*

*Defined in [task/treeChop.ts:18](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/treeChop.ts#L18)*

___

###  observationSpace

• **observationSpace**: *Space*

*Inherited from [Task](task.md).[observationSpace](task.md#observationspace)*

*Defined in [task/task.ts:8](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L8)*

___

### `Protected` parameterRandomization

• **parameterRandomization**: *any*

*Inherited from [Task](task.md).[parameterRandomization](task.md#protected-parameterrandomization)*

*Defined in [task/task.ts:17](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L17)*

___

###  rewardRange

• **rewardRange**: *Space*

*Inherited from [Task](task.md).[rewardRange](task.md#rewardrange)*

*Defined in [task/task.ts:9](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L9)*

___

### `Protected` taskConfig

• **taskConfig**: *any*

*Inherited from [Task](task.md).[taskConfig](task.md#protected-taskconfig)*

*Defined in [task/task.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L15)*

## Methods

###  reset

▸ **reset**(): *tf.Tensor*

*Overrides [Task](task.md).[reset](task.md#abstract-reset)*

*Defined in [task/treeChop.ts:28](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/treeChop.ts#L28)*

**Returns:** *tf.Tensor*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Overrides [Task](task.md).[step](task.md#abstract-step)*

*Defined in [task/treeChop.ts:32](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/treeChop.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
