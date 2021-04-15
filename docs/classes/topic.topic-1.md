[evnbu](../README.md) / [topic](../modules/topic.md) / Topic

# Class: Topic

[topic](../modules/topic.md).Topic

## Hierarchy

* [*Streamer*](streamer.streamer-1.md)

  ↳ **Topic**

## Table of contents

### Constructors

- [constructor](topic.topic-1.md#constructor)

### Properties

- [channel](topic.topic-1.md#channel)
- [emitter](topic.topic-1.md#emitter)

### Accessors

- [name](topic.topic-1.md#name)

### Methods

- [addListener](topic.topic-1.md#addlistener)
- [destroy](topic.topic-1.md#destroy)
- [emit](topic.topic-1.md#emit)
- [getEventEmitter](topic.topic-1.md#geteventemitter)
- [getMaxListeners](topic.topic-1.md#getmaxlisteners)
- [listenerCount](topic.topic-1.md#listenercount)
- [listeners](topic.topic-1.md#listeners)
- [off](topic.topic-1.md#off)
- [on](topic.topic-1.md#on)
- [once](topic.topic-1.md#once)
- [prependListener](topic.topic-1.md#prependlistener)
- [prependOnceListener](topic.topic-1.md#prependoncelistener)
- [rawListeners](topic.topic-1.md#rawlisteners)
- [removeAllListeners](topic.topic-1.md#removealllisteners)
- [removeListener](topic.topic-1.md#removelistener)
- [setMaxListeners](topic.topic-1.md#setmaxlisteners)

## Constructors

### constructor

\+ **new Topic**(`name`: *string*, `channel`: *string*, `maxListeners?`: *number*): [*Topic*](topic.topic-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | - |
`channel` | *string* | - |
`maxListeners` | *number* | 0 |

**Returns:** [*Topic*](topic.topic-1.md)

Overrides: [Streamer](streamer.streamer-1.md)

Defined in: [topic.ts:5](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/topic.ts#L5)

## Properties

### channel

• `Readonly` **channel**: *string*

Defined in: [topic.ts:5](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/topic.ts#L5)

___

### emitter

• **emitter**: *EventEmitter*

Inherited from: [Streamer](streamer.streamer-1.md).[emitter](streamer.streamer-1.md#emitter)

Defined in: [streamer.ts:14](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L14)

## Accessors

### name

• get **name**(): *string*

**Returns:** *string*

Defined in: [streamer.ts:28](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L28)

## Methods

### addListener

▸ **addListener**<T\>(`listener`: [*Listener*](../modules/streamer.md#listener)<T\>): [*Subscription*](../modules/streamer.md#subscription)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/streamer.md#subscription)

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:38](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L38)

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

Overrides: [Streamer](streamer.streamer-1.md)

Defined in: [topic.ts:22](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/topic.ts#L22)

___

### emit

▸ **emit**(`payload?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`payload?` | *any* |

**Returns:** *void*

Overrides: [Streamer](streamer.streamer-1.md)

Defined in: [topic.ts:13](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/topic.ts#L13)

___

### getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

**Returns:** *EventEmitter*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:86](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L86)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:77](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L77)

___

### listenerCount

▸ **listenerCount**(): *number*

**Returns:** *number*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:101](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L101)

___

### listeners

▸ **listeners**(): [*Listener*](../modules/streamer.md#listener)<any\>[]

**Returns:** [*Listener*](../modules/streamer.md#listener)<any\>[]

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:91](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L91)

___

### off

▸ **off**(`listener`: [*Listener*](../modules/streamer.md#listener)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<any\> |

**Returns:** *void*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:68](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L68)

___

### on

▸ **on**<T\>(`listener`: [*Listener*](../modules/streamer.md#listener)<T\>): [*Subscription*](../modules/streamer.md#subscription)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/streamer.md#subscription)

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:43](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L43)

___

### once

▸ **once**<T\>(`listener`: [*Listener*](../modules/streamer.md#listener)<T\>): [*Subscription*](../modules/streamer.md#subscription)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/streamer.md#subscription)

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:53](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L53)

___

### prependListener

▸ **prependListener**<T\>(`listener`: [*Listener*](../modules/streamer.md#listener)<T\>): [*Subscription*](../modules/streamer.md#subscription)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/streamer.md#subscription)

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:48](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L48)

___

### prependOnceListener

▸ **prependOnceListener**<T\>(`listener`: [*Listener*](../modules/streamer.md#listener)<T\>): [*Subscription*](../modules/streamer.md#subscription)

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<T\> |

**Returns:** [*Subscription*](../modules/streamer.md#subscription)

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:58](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L58)

___

### rawListeners

▸ **rawListeners**(): [*Listener*](../modules/streamer.md#listener)<any\>[]

**Returns:** [*Listener*](../modules/streamer.md#listener)<any\>[]

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:96](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L96)

___

### removeAllListeners

▸ **removeAllListeners**(): *void*

**Returns:** *void*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:72](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L72)

___

### removeListener

▸ **removeListener**(`listener`: [*Listener*](../modules/streamer.md#listener)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<any\> |

**Returns:** *void*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:63](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L63)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** *void*

Inherited from: [Streamer](streamer.streamer-1.md)

Defined in: [streamer.ts:81](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L81)
