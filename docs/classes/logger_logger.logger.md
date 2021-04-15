[evnbu](../README.md) / [logger/logger](../modules/logger_logger.md) / Logger

# Class: Logger

[logger/logger](../modules/logger_logger.md).Logger

## Table of contents

### Properties

- [logLevel](logger_logger.logger.md#loglevel)
- [meta](logger_logger.logger.md#meta)
- [collapseClasses](logger_logger.logger.md#collapseclasses)
- [defaultLevel](logger_logger.logger.md#defaultlevel)
- [enabled](logger_logger.logger.md#enabled)
- [scrubValues](logger_logger.logger.md#scrubvalues)

### Accessors

- [isBrowser](logger_logger.logger.md#isbrowser)
- [isCI](logger_logger.logger.md#isci)
- [isElectron](logger_logger.logger.md#iselectron)
- [isIE](logger_logger.logger.md#isie)
- [isJSDOM](logger_logger.logger.md#isjsdom)
- [isNode](logger_logger.logger.md#isnode)
- [isReactNative](logger_logger.logger.md#isreactnative)
- [isReactNativeDebugger](logger_logger.logger.md#isreactnativedebugger)
- [isSilent](logger_logger.logger.md#issilent)
- [isUnitTest](logger_logger.logger.md#isunittest)
- [isWebWorker](logger_logger.logger.md#iswebworker)

### Methods

- [critical](logger_logger.logger.md#critical)
- [debug](logger_logger.logger.md#debug)
- [error](logger_logger.logger.md#error)
- [info](logger_logger.logger.md#info)
- [silly](logger_logger.logger.md#silly)
- [trace](logger_logger.logger.md#trace)
- [warn](logger_logger.logger.md#warn)
- [clearHandlers](logger_logger.logger.md#clearhandlers)
- [create](logger_logger.logger.md#create)
- [registerHandler](logger_logger.logger.md#registerhandler)
- [setGlobalMeta](logger_logger.logger.md#setglobalmeta)
- [stringify](logger_logger.logger.md#stringify)
- [unregisterHandler](logger_logger.logger.md#unregisterhandler)

## Properties

### logLevel

• `Optional` **logLevel**: [*LogLevels*](../enums/logger_logger.loglevels.md)

Defined in: [logger/logger.ts:309](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L309)

___

### meta

• **meta**: [*Payload*](../modules/logger_logger.md#payload)

Defined in: [logger/logger.ts:308](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L308)

___

### collapseClasses

▪ `Static` **collapseClasses**: *string*[]

Defined in: [logger/logger.ts:73](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L73)

___

### defaultLevel

▪ `Static` **defaultLevel**: [*LogLevels*](../enums/logger_logger.loglevels.md)

Defined in: [logger/logger.ts:194](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L194)

___

### enabled

▪ `Static` **enabled**: *boolean*

Defined in: [logger/logger.ts:192](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L192)

___

### scrubValues

▪ `Static` **scrubValues**: *string*[]

Defined in: [logger/logger.ts:56](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L56)

## Accessors

### isBrowser

• `Static`get **isBrowser**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:124](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L124)

___

### isCI

• `Static`get **isCI**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:160](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L160)

___

### isElectron

• `Static`get **isElectron**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:150](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L150)

___

### isIE

• `Static`get **isIE**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:129](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L129)

___

### isJSDOM

• `Static`get **isJSDOM**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:114](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L114)

___

### isNode

• `Static`get **isNode**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:144](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L144)

___

### isReactNative

• `Static`get **isReactNative**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:134](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L134)

___

### isReactNativeDebugger

• `Static`get **isReactNativeDebugger**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:139](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L139)

___

### isSilent

• `Static`get **isSilent**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:185](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L185)

___

### isUnitTest

• `Static`get **isUnitTest**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:176](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L176)

___

### isWebWorker

• `Static`get **isWebWorker**(): *boolean*

**Returns:** *boolean*

Defined in: [logger/logger.ts:119](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L119)

## Methods

### critical

▸ **critical**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:363](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L363)

▸ **critical**(`message`: *string*, `error?`: Error): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`error?` | Error |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:364](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L364)

▸ **critical**(`error`: Error): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:365](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L365)

___

### debug

▸ **debug**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:344](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L344)

___

### error

▸ **error**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:356](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L356)

▸ **error**(`message`: *string*, `error?`: Error): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`error?` | Error |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:357](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L357)

▸ **error**(`error`: Error): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:358](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L358)

___

### info

▸ **info**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:348](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L348)

___

### silly

▸ **silly**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:336](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L336)

___

### trace

▸ **trace**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:340](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L340)

___

### warn

▸ **warn**(`message`: *string*, `payload?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`payload?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:352](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L352)

___

### clearHandlers

▸ `Static`**clearHandlers**(): *void*

**Returns:** *void*

Defined in: [logger/logger.ts:109](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L109)

___

### create

▸ `Static`**create**(`tag?`: *string*, `meta?`: [*Payload*](../modules/logger_logger.md#payload)): [*Logger*](logger_logger.logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`tag?` | *string* |
`meta?` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** [*Logger*](logger_logger.logger.md)

Defined in: [logger/logger.ts:96](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L96)

___

### registerHandler

▸ `Static`**registerHandler**(`handlerFunc`: [*LogHandlerFunc*](../modules/logger_logger.md#loghandlerfunc)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`handlerFunc` | [*LogHandlerFunc*](../modules/logger_logger.md#loghandlerfunc) |

**Returns:** *void*

Defined in: [logger/logger.ts:100](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L100)

___

### setGlobalMeta

▸ `Static`**setGlobalMeta**(`meta`: [*Payload*](../modules/logger_logger.md#payload)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`meta` | [*Payload*](../modules/logger_logger.md#payload) |

**Returns:** *void*

Defined in: [logger/logger.ts:201](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L201)

___

### stringify

▸ `Static`**stringify**(`value`: *any*, `space?`: *string* \| *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |
`space?` | *string* \| *number* |

**Returns:** *string*

Defined in: [logger/logger.ts:205](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L205)

___

### unregisterHandler

▸ `Static`**unregisterHandler**(`handlerFunc`: [*LogHandlerFunc*](../modules/logger_logger.md#loghandlerfunc)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`handlerFunc` | [*LogHandlerFunc*](../modules/logger_logger.md#loghandlerfunc) |

**Returns:** *void*

Defined in: [logger/logger.ts:104](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L104)
