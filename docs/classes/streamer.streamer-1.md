[evnbu](../README.md) / [streamer](../modules/streamer.md) / Streamer

# Class: Streamer

[streamer](../modules/streamer.md).Streamer

## Hierarchy

* **Streamer**

  ↳ [*Channel*](channel.channel-1.md)

  ↳ [*Topic*](topic.topic-1.md)

## Table of contents

### Constructors

- [constructor](streamer.streamer-1.md#constructor)

### Properties

- [emitter](streamer.streamer-1.md#emitter)

### Accessors

- [name](streamer.streamer-1.md#name)

### Methods

- [addListener](streamer.streamer-1.md#addlistener)
- [destroy](streamer.streamer-1.md#destroy)
- [emit](streamer.streamer-1.md#emit)
- [getEventEmitter](streamer.streamer-1.md#geteventemitter)
- [getMaxListeners](streamer.streamer-1.md#getmaxlisteners)
- [listenerCount](streamer.streamer-1.md#listenercount)
- [listeners](streamer.streamer-1.md#listeners)
- [off](streamer.streamer-1.md#off)
- [on](streamer.streamer-1.md#on)
- [once](streamer.streamer-1.md#once)
- [prependListener](streamer.streamer-1.md#prependlistener)
- [prependOnceListener](streamer.streamer-1.md#prependoncelistener)
- [rawListeners](streamer.streamer-1.md#rawlisteners)
- [removeAllListeners](streamer.streamer-1.md#removealllisteners)
- [removeListener](streamer.streamer-1.md#removelistener)
- [setMaxListeners](streamer.streamer-1.md#setmaxlisteners)

## Constructors

### constructor

\+ **new Streamer**(`name`: *string*, `maxListeners?`: *number*): [*Streamer*](streamer.streamer-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | - |
`maxListeners` | *number* | 0 |

**Returns:** [*Streamer*](streamer.streamer-1.md)

Defined in: [streamer.ts:16](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L16)

## Properties

### emitter

• **emitter**: *EventEmitter*

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

Defined in: [streamer.ts:38](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L38)

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

Defined in: [streamer.ts:125](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L125)

___

### emit

▸ **emit**(`payload?`: [*EventPayload*](../interfaces/streamer.eventpayload.md)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`payload?` | [*EventPayload*](../interfaces/streamer.eventpayload.md)<any\> |

**Returns:** *void*

Defined in: [streamer.ts:33](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L33)

___

### getEventEmitter

▸ **getEventEmitter**(): *EventEmitter*

**Returns:** *EventEmitter*

Defined in: [streamer.ts:86](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L86)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: [streamer.ts:77](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L77)

___

### listenerCount

▸ **listenerCount**(): *number*

**Returns:** *number*

Defined in: [streamer.ts:101](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L101)

___

### listeners

▸ **listeners**(): [*Listener*](../modules/streamer.md#listener)<any\>[]

**Returns:** [*Listener*](../modules/streamer.md#listener)<any\>[]

Defined in: [streamer.ts:91](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L91)

___

### off

▸ **off**(`listener`: [*Listener*](../modules/streamer.md#listener)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<any\> |

**Returns:** *void*

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

Defined in: [streamer.ts:58](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L58)

___

### rawListeners

▸ **rawListeners**(): [*Listener*](../modules/streamer.md#listener)<any\>[]

**Returns:** [*Listener*](../modules/streamer.md#listener)<any\>[]

Defined in: [streamer.ts:96](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L96)

___

### removeAllListeners

▸ **removeAllListeners**(): *void*

**Returns:** *void*

Defined in: [streamer.ts:72](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L72)

___

### removeListener

▸ **removeListener**(`listener`: [*Listener*](../modules/streamer.md#listener)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`listener` | [*Listener*](../modules/streamer.md#listener)<any\> |

**Returns:** *void*

Defined in: [streamer.ts:63](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L63)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** *void*

Defined in: [streamer.ts:81](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L81)
