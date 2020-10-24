---
id: "survival"
title: "Survival"
sidebar_label: "Survival"
---

[prismarine-gym](../index.md) › [Globals](../globals.md) › [Survival](survival.md)

## Hierarchy

* [Task](task.md)

  ↳ **Survival**

## Index

### Constructors

* [constructor](survival.md#constructor)

### Properties

* [actionSpace](survival.md#actionspace)
* [bot](survival.md#protected-bot)
* [curriculum](survival.md#protected-optional-curriculum)
* [observationSpace](survival.md#observationspace)
* [parameterRandomization](survival.md#protected-parameterrandomization)
* [rewardRange](survival.md#rewardrange)
* [taskConfig](survival.md#protected-taskconfig)

### Methods

* [reset](survival.md#reset)
* [step](survival.md#step)

## Constructors

###  constructor

\+ **new Survival**(`bot`: Bot, `taskConfig`: any): *[Survival](survival.md)*

*Overrides [Task](task.md).[constructor](task.md#constructor)*

*Defined in [task/survival.ts:15](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/survival.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`bot` | Bot |
`taskConfig` | any |

**Returns:** *[Survival](survival.md)*

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

*Defined in [task/survival.ts:23](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/survival.ts#L23)*

**Returns:** *tf.Tensor*

___

###  step

▸ **step**(`action`: number): *[tf.Tensor, number, boolean, __type]*

*Overrides [Task](task.md).[step](task.md#abstract-step)*

*Defined in [task/survival.ts:27](https://github.com/louis030195/prismarine-gym/blob/28cd6da/src/task/survival.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | number |

**Returns:** *[tf.Tensor, number, boolean, __type]*
