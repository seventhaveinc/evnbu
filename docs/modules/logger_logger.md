[evnbu](../README.md) / logger/logger

# Module: logger/logger

## Table of contents

### Enumerations

- [LogLevels](../enums/logger_logger.loglevels.md)

### Classes

- [Logger](../classes/logger_logger.logger.md)

### Interfaces

- [LogEntry](../interfaces/logger_logger.logentry.md)

### Type aliases

- [LogHandlerFunc](logger_logger.md#loghandlerfunc)
- [Payload](logger_logger.md#payload)

### Variables

- [ConsoleLogFuncs](logger_logger.md#consolelogfuncs)
- [LogLevelNames](logger_logger.md#loglevelnames)

### Functions

- [createBrowserLogger](logger_logger.md#createbrowserlogger)
- [createDefaultLogger](logger_logger.md#createdefaultlogger)
- [createJsonConsoleLogger](logger_logger.md#createjsonconsolelogger)
- [createTTYLogger](logger_logger.md#createttylogger)

## Type aliases

### LogHandlerFunc

Ƭ **LogHandlerFunc**: (`logEntry`: [*LogEntry*](../interfaces/logger_logger.logentry.md)) => *void*

#### Type declaration:

▸ (`logEntry`: [*LogEntry*](../interfaces/logger_logger.logentry.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`logEntry` | [*LogEntry*](../interfaces/logger_logger.logentry.md) |

**Returns:** *void*

Defined in: [logger/logger.ts:51](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L51)

___

### Payload

Ƭ **Payload**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`error`? | Error |

Defined in: [logger/logger.ts:41](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L41)

## Variables

### ConsoleLogFuncs

• `Const` **ConsoleLogFuncs**: { [key in LogLevels]: function}

Defined in: [logger/logger.ts:28](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L28)

___

### LogLevelNames

• `Const` **LogLevelNames**: { [key in LogLevels]: string}

Defined in: [logger/logger.ts:18](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L18)

## Functions

### createBrowserLogger

▸ **createBrowserLogger**(): [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

**Returns:** [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

Defined in: [logger/logger.ts:526](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L526)

___

### createDefaultLogger

▸ **createDefaultLogger**(`forceColor?`: *boolean*): [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

#### Parameters:

Name | Type |
:------ | :------ |
`forceColor?` | *boolean* |

**Returns:** [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

Defined in: [logger/logger.ts:554](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L554)

___

### createJsonConsoleLogger

▸ **createJsonConsoleLogger**(): *function*

**Returns:** (`logEntry`: [*LogEntry*](../interfaces/logger_logger.logentry.md)) => *void*

Defined in: [logger/logger.ts:541](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L541)

___

### createTTYLogger

▸ **createTTYLogger**(`forceColor?`: *boolean*): [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`forceColor` | *boolean* | false |

**Returns:** [*LogHandlerFunc*](logger_logger.md#loghandlerfunc)

Defined in: [logger/logger.ts:436](https://github.com/nawilliams95/evnbu/blob/b0bc93a/src/logger/logger.ts#L436)
