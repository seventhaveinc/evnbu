[evnbu](../README.md) / [channel](../modules/channel.md) / Channel

# Class: Channel

[channel](../modules/channel.md).Channel

## Hierarchy

* [*Streamer*](streamer.streamer-1.md)

  ↳ **Channel**

## Table of contents

### Constructors

- [constructor](channel.channel-1.md#constructor)

### Properties

- [emitter](channel.channel-1.md#emitter)
- [topics](channel.channel-1.md#topics)

### Accessors

- [name](channel.channel-1.md#name)

### Methods

- [addListener](channel.channel-1.md#addlistener)
- [destroy](channel.channel-1.md#destroy)
- [emit](channel.channel-1.md#emit)
- [getAllTopics](channel.channel-1.md#getalltopics)
- [getEventEmitter](channel.channel-1.md#geteventemitter)
- [getMaxListeners](channel.channel-1.md#getmaxlisteners)
- [hasTopic](channel.channel-1.md#hastopic)
- [listenerCount](channel.channel-1.md#listenercount)
- [listeners](channel.channel-1.md#listeners)
- [off](channel.channel-1.md#off)
- [on](channel.channel-1.md#on)
- [once](channel.channel-1.md#once)
- [prependListener](channel.channel-1.md#prependlistener)
- [prependOnceListener](channel.channel-1.md#prependoncelistener)
- [rawListeners](channel.channel-1.md#rawlisteners)
- [removeAllListeners](channel.channel-1.md#removealllisteners)
- [removeListener](channel.channel-1.md#removelistener)
- [removeTopic](channel.channel-1.md#removetopic)
- [setMaxListeners](channel.channel-1.md#setmaxlisteners)
- [topic](channel.channel-1.md#topic)

## Constructors

### constructor

\+ **new Channel**(`name`: *string*, `maxListeners?`: *number*): [*Channel*](channel.channel-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | - |
`maxListeners` | *number* | 0 |

**Returns:** [*Channel*](channel.channel-1.md)

Overrides: [Streamer](streamer.streamer-1.md)

Defined in: [channel.ts:7](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L7)

## Properties

### emitter

• **emitter**: *EventEmitter*

Inherited from: [Streamer](streamer.streamer-1.md).[emitter](streamer.streamer-1.md#emitter)

Defined in: [streamer.ts:14](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L14)

___

### topics

• **topics**: *object*= {}

#### Type declaration:

Defined in: [channel.ts:5](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L5)

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

Defined in: [channel.ts:75](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L75)

___

### emit

▸ **emit**(`payload?`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`payload?` | *any* |

**Returns:** *void*

Overrides: [Streamer](streamer.streamer-1.md)

Defined in: [channel.ts:16](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L16)

___

### getAllTopics

▸ **getAllTopics**(): [*Topic*](topic.topic-1.md)[]

**Returns:** [*Topic*](topic.topic-1.md)[]

Defined in: [channel.ts:62](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L62)

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

### hasTopic

▸ **hasTopic**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [channel.ts:44](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L44)

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

### removeTopic

▸ **removeTopic**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [channel.ts:49](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L49)

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

___

### topic

▸ **topic**(`name`: *string*): [*Topic*](topic.topic-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*Topic*](topic.topic-1.md)

Defined in: [channel.ts:27](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/channel.ts#L27)
