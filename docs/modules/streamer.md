[evnbu](../README.md) / streamer

# Module: streamer

## Table of contents

### Classes

- [Streamer](../classes/streamer.streamer-1.md)

### Interfaces

- [EventPayload](../interfaces/streamer.eventpayload.md)

### Type aliases

- [Listener](streamer.md#listener)
- [Subscription](streamer.md#subscription)

## Type aliases

### Listener

Ƭ **Listener**<T\>: (`event`: [*EventPayload*](../interfaces/streamer.eventpayload.md)<T\>) => *void*

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* \| *undefined* |

#### Type declaration:

▸ (`event`: [*EventPayload*](../interfaces/streamer.eventpayload.md)<T\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | [*EventPayload*](../interfaces/streamer.eventpayload.md)<T\> |

**Returns:** *void*

Defined in: [streamer.ts:140](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L140)

___

### Subscription

Ƭ **Subscription**: () => *void*

#### Type declaration:

▸ (): *void*

**Returns:** *void*

Defined in: [streamer.ts:143](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/streamer.ts#L143)
