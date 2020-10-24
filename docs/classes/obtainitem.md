---
id: "obtainitem"
title: "ObtainItem"
sidebar_label: "ObtainItem"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [ObtainItem](obtainitem.md)

## Hierarchy

* [Task](task.md)

  ↳ **ObtainItem**

## Index

### Constructors

* [constructor](obtainitem.md#constructor)

### Properties

* [actionSpace](obtainitem.md#actionspace)
* [bot](obtainitem.md#protected-bot)
* [curriculum](obtainitem.md#protected-optional-curriculum)
* [observationSpace](obtainitem.md#observationspace)
* [parameterRandomization](obtainitem.md#protected-parameterrandomization)
* [rewardRange](obtainitem.md#rewardrange)
* [taskConfig](obtainitem.md#protected-taskconfig)

### Methods

* [reset](obtainitem.md#reset)
* [step](obtainitem.md#step)

## Constructors

###  constructor

\+ **new ObtainItem**(`bot`: Bot, `taskConfig`: any): *[ObtainItem](obtainitem.md)*

*Overrides [Task](task.md).[constructor](task.md#constructor)*

*Defined in [task/obtainItem.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/obtainItem.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[ObtainItem](obtainitem.md)*

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

### `Protected` taskConfig

• **taskConfig**: *any*

*Inherited from [Task](task.md).[taskConfig](task.md#protected-taskconfig)*

*Defined in [task/task.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/task.ts#L15)*

## Methods

###  reset

▸ **reset**(): *tf.Tensor*

*Overrides [Task](task.md).[reset](task.md#abstract-reset)*

*Defined in [task/obtainItem.ts:23](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/obtainItem.ts#L23)*

**Returns:** *tf.Tensor*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Overrides [Task](task.md).[step](task.md#abstract-step)*

*Defined in [task/obtainItem.ts:27](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/obtainItem.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
