[evnbu](../README.md) / [eventBus](../modules/eventbus.md) / EventBus

# Class: EventBus

[eventBus](../modules/eventbus.md).EventBus

## Table of contents

### Constructors

- [constructor](eventbus.eventbus-1.md#constructor)

### Methods

- [allChannels](eventbus.eventbus-1.md#allchannels)
- [channel](eventbus.eventbus-1.md#channel)
- [destroy](eventbus.eventbus-1.md#destroy)
- [getAllChannels](eventbus.eventbus-1.md#getallchannels)
- [hasChannel](eventbus.eventbus-1.md#haschannel)
- [mainChannel](eventbus.eventbus-1.md#mainchannel)
- [removeChannel](eventbus.eventbus-1.md#removechannel)

## Constructors

### constructor

\+ **new EventBus**(`config?`: [*EventBusConfig*](../interfaces/eventbus.eventbusconfig.md)): [*EventBus*](eventbus.eventbus-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`config?` | [*EventBusConfig*](../interfaces/eventbus.eventbusconfig.md) |

**Returns:** [*EventBus*](eventbus.eventbus-1.md)

Defined in: [eventBus.ts:11](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L11)

## Methods

### allChannels

▸ **allChannels**(): [*Channel*](channel.channel-1.md)

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [eventBus.ts:38](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L38)

___

### channel

▸ **channel**(`name`: *string*): [*Channel*](channel.channel-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [eventBus.ts:43](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L43)

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

Defined in: [eventBus.ts:105](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L105)

___

### getAllChannels

▸ **getAllChannels**(): [*Channel*](channel.channel-1.md)[]

**Returns:** [*Channel*](channel.channel-1.md)[]

Defined in: [eventBus.ts:100](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L100)

___

### hasChannel

▸ **hasChannel**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [eventBus.ts:55](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L55)

___

### mainChannel

▸ **mainChannel**(): [*Channel*](channel.channel-1.md)

**Returns:** [*Channel*](channel.channel-1.md)

Defined in: [eventBus.ts:33](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L33)

___

### removeChannel

▸ **removeChannel**(`name`: *string*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *boolean*

Defined in: [eventBus.ts:60](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/eventBus.ts#L60)
