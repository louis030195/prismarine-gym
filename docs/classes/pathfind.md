---
id: "pathfind"
title: "PathFind"
sidebar_label: "PathFind"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [PathFind](pathfind.md)

## Hierarchy

* [Task](task.md)

  ↳ **PathFind**

## Index

### Constructors

* [constructor](pathfind.md#constructor)

### Properties

* [actionSpace](pathfind.md#actionspace)
* [bot](pathfind.md#protected-bot)
* [curriculum](pathfind.md#protected-optional-curriculum)
* [observationSpace](pathfind.md#observationspace)
* [parameterRandomization](pathfind.md#protected-parameterrandomization)
* [rewardRange](pathfind.md#rewardrange)
* [target](pathfind.md#private-target)
* [taskConfig](pathfind.md#protected-taskconfig)

### Methods

* [reset](pathfind.md#reset)
* [step](pathfind.md#step)

## Constructors

###  constructor

\+ **new PathFind**(`bot`: Bot, `taskConfig`: any): *[PathFind](pathfind.md)*

*Overrides [Task](task.md).[constructor](task.md#constructor)*

*Defined in [task/pathFind.ts:12](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/pathFind.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[PathFind](pathfind.md)*

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

*Defined in [task/pathFind.ts:12](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/pathFind.ts#L12)*

___

### `Protected` taskConfig

• **taskConfig**: *any*

*Inherited from [Task](task.md).[taskConfig](task.md#protected-taskconfig)*

*Defined in [task/task.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L15)*

## Methods

###  reset

▸ **reset**(): *tf.Tensor*

*Overrides [Task](task.md).[reset](task.md#abstract-reset)*

*Defined in [task/pathFind.ts:26](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/pathFind.ts#L26)*

**Returns:** *tf.Tensor*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Overrides [Task](task.md).[step](task.md#abstract-step)*

*Defined in [task/pathFind.ts:33](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/pathFind.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
