---
id: "follow"
title: "Follow"
sidebar_label: "Follow"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [Follow](follow.md)

## Hierarchy

* [Task](task.md)

  ↳ **Follow**

## Index

### Constructors

* [constructor](follow.md#constructor)

### Properties

* [actionSpace](follow.md#actionspace)
* [bot](follow.md#protected-bot)
* [curriculum](follow.md#protected-optional-curriculum)
* [observationSpace](follow.md#observationspace)
* [parameterRandomization](follow.md#protected-parameterrandomization)
* [rewardRange](follow.md#rewardrange)
* [target](follow.md#private-target)
* [taskConfig](follow.md#protected-taskconfig)

### Methods

* [reset](follow.md#reset)
* [step](follow.md#step)

## Constructors

###  constructor

\+ **new Follow**(`bot`: Bot, `taskConfig`: any): *[Follow](follow.md)*

*Overrides [Task](task.md).[constructor](task.md#constructor)*

*Defined in [task/follow.ts:13](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/follow.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[Follow](follow.md)*

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

### `Private` target

• **target**: *Vec3*

*Defined in [task/follow.ts:13](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/follow.ts#L13)*

___

### `Protected` taskConfig

• **taskConfig**: *any*

*Inherited from [Task](task.md).[taskConfig](task.md#protected-taskconfig)*

*Defined in [task/task.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L15)*

## Methods

###  reset

▸ **reset**(): *tf.Tensor*

*Overrides [Task](task.md).[reset](task.md#abstract-reset)*

*Defined in [task/follow.ts:29](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/follow.ts#L29)*

**Returns:** *tf.Tensor*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Overrides [Task](task.md).[step](task.md#abstract-step)*

*Defined in [task/follow.ts:36](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/follow.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
