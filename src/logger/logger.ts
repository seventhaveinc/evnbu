 //*** */ This helps to avoid TypeScript errors when trying to access global variables not in the current scope //*** */
 declare let global: any;
const process = global?.process;
const window = global?.window;
const document = global?.document;
const navigator = global?.navigator;


export enum LogLevels {
  SILLY = 0, //Lowest debug level; This will not be logged unless explicitly enabled
  DEBUG = 1, // Debug messages for dev env
  INFO = 2, //Info messages will be logged in pro env by default
  WARN = 3, // Warning about a potential issue or an expected error occured
  ERROR = 4, // An unexpected error occurred
  CRITICAL = 5, //Critical application error that cannot be recovered
  NONE = 99 // to turn off logging
}

export const LogLevelNames: { [key in LogLevels]: string } = {
  [LogLevels.SILLY]: 'SILLY',
  [LogLevels.DEBUG]: 'DEBUG',
  [LogLevels.INFO]: 'INFO',
  [LogLevels.WARN]: 'WARN',
  [LogLevels.ERROR]: 'ERROR',
  [LogLevels.CRITICAL]: 'CRITICAL',
  [LogLevels.NONE]: 'NONE'
}

export const ConsoleLogFuncs: {
  [key in LogLevels]: (...args: any[]) => void
} = {
  [LogLevels.SILLY]: console.debug.bind(console),
  [LogLevels.DEBUG]: console.debug.bind(console),
  [LogLevels.INFO]: console.info.bind(console),
  [LogLevels.WARN]: console.warn.bind(console),
  [LogLevels.ERROR]: console.error.bind(console),
  [LogLevels.CRITICAL]: console.error.bind(console),
  [LogLevels.NONE]: () => {} // no-op
}


export type Payload = { [key: string]: any; error?: Error };

export interface LogEntry {
  timestamp: Date;
  level: LogLevels;
  message: string;
  payload?: Payload;
  meta?: Payload;
}

export type LogHandlerFunc = (logEntry: LogEntry) => void;


export class Logger {
  
  static scrubValues = [
    "password",
    "newpassword",
    "oldpassword",
    "secret",
    "passwd",
    "apikey",
    "accesstoken",
    "authtoken",
    "creds",
    "credentials",
    "mysqlpwd",
    "stripetoken",
    "cardnumber",
  ];

  
  static collapseClasses = [
    "ClientRequest",
    "IncomingMessage",
    "Buffer",
    "TLSSocket",
    "Socket",
    "WebSocket",
    "WebSocketTransport",
    "ReadableState",
    "WritableState",
    "HttpsAgent",
    "HttpAgent",
    "CDPSession", // Puppeteer
  ];

  
  private static _creditCardRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

  private static _globalMetaData?: Payload;

  private static _handlers: LogHandlerFunc[] = [];

  
  static create(tag?: string, meta?: Payload): Logger {
    return new Logger(tag, meta);
  }

  static registerHandler(handlerFunc: LogHandlerFunc) {
    Logger._handlers.push(handlerFunc);
  }

  static unregisterHandler(handlerFunc: LogHandlerFunc) {
    Logger._handlers = Logger._handlers.filter((func) => func === handlerFunc);
  }


  static clearHandlers() {
    Logger._handlers = [];
  }

  
  static get isJSDOM(): boolean {
    return navigator?.userAgent?.includes("Node.js") || navigator?.userAgent?.includes("jsdom");
  }

 
  static get isWebWorker(): boolean {
    return global && typeof global.WorkerGlobalScope !== "undefined" && global.self instanceof global.WorkerGlobalScope;
  }

  
  static get isBrowser(): boolean {
    return (typeof window !== "undefined" || Logger.isWebWorker) && !Logger.isJSDOM;
  }

 
  static get isIE(): boolean {
    return Logger.isBrowser && document && window && document.documentMode && window.StyleMedia;
  }

  
  static get isReactNative(): boolean {
    return Logger.isBrowser && navigator && navigator.product === "ReactNative";
  }

 
  static get isReactNativeDebugger(): boolean {
    return Logger.isReactNative && typeof global?.DedicatedWorkerGlobalScope !== "undefined";
  }

  
  static get isNode(): boolean {
    // Note that Webpack et al are often adding process, module, require, etc.
    return typeof process === "object" && typeof process.env === "object" && !Logger.isBrowser;
  }

  
  static get isCI(): boolean {
    if (!Logger.isNode) {
      return false;
    }
    const { CI, CONTINUOUS_INTEGRATION, BUILD_NUMBER, RUN_ID } = process.env;
    
    return !!(
      CI || 
      CONTINUOUS_INTEGRATION || 
      BUILD_NUMBER || 
      RUN_ID || 
      false
    );
  }

  
  static get isUnitTest(): boolean {
    if (!Logger.isNode) {
      return false;
    }
    const { JEST_WORKER_ID } = process.env;
    return !!(JEST_WORKER_ID || typeof global?.it === "function");
  }

  
  static get isSilent(): boolean {
    if (!Logger.isNode) {
      return false;
    }
    return process.argv?.includes("--silent");
  }

  static enabled: boolean = !Logger.isCI && !Logger.isSilent && !Logger.isUnitTest;

  static defaultLevel: LogLevels =
    Logger._parseLogLevel(process?.env?.LOG_LEVEL) ??
    Logger._parseLogLevel(global?.LOG_LEVEL) ??
    Logger._parseLogLevel(window?.LOG_LEVEL) ??
    (process?.env?.NODE_ENV === "production" ? LogLevels.INFO : LogLevels.DEBUG);


  static setGlobalMeta(meta: Payload): void {
    Logger._globalMetaData = { ...meta };
  }

  static stringify(value: any, space?: string | number | undefined): string {
    return JSON.stringify(value, Logger._serializeObj, space);
  }

  private static _destroyCircular(from: any, seen: any[], scrub: boolean = false) {
    let to: any;
    if (Array.isArray(from)) {
      to = [];
    } else {
      to = {};
    }

    seen.push(from);

    Object.keys(from).forEach((key) => {
      const value = from[key];

      if (
        typeof value === "string" &&
        (Logger.scrubValues.includes(key.toLowerCase().replace(/[^a-z0-9]/g, "")) ||
          Logger._creditCardRegEx.test(value) ||
          value.startsWith("Bearer "))
      ) {
        to[key] = "[hidden]";
        return;
      }

      if (typeof value === "function") {
        return;
      }

      if (typeof value === "symbol") {
        to[key] = value.toString();
        return;
      }

      if (!value || typeof value !== "object") {
        to[key] = value;
        return;
      }

      if (typeof value === "object" && typeof value.toJSON === "function") {
        to[key] = value.toJSON();
        return;
      }

      if (typeof value === "object" && value.constructor) {
        const className = value.constructor.name;
        if (Logger.collapseClasses.includes(className)) {
          to[key] = `[${className}]`;
          return;
        }
      }

      if (!seen.includes(from[key])) {
        to[key] = Logger._destroyCircular(from[key], seen.slice(0), scrub);
        return;
      }

      to[key] = "[Circular]";
    });

    if (typeof from.name === "string") {
      to.name = from.name;
    }

    if (typeof from.message === "string") {
      to.message = from.message;
    }

    if (typeof from.stack === "string") {
      to.stack = from.stack;
    }
    return to;
  }

  private static _serializeObj(key: any, value: any): any {
    if (typeof value === "object" && value !== null) {
      return Logger._destroyCircular(value, []);
    }
    return value;
  }

  private static _parseLogLevel(value?: string | number | null): LogLevels | undefined {
    const logLevelMap = {
      S: LogLevels.SILLY,
      D: LogLevels.DEBUG,
      I: LogLevels.INFO,
      W: LogLevels.WARN,
      E: LogLevels.ERROR,
      C: LogLevels.CRITICAL,
      N: LogLevels.NONE,
    };
    if (typeof value === "string") {
      const firstChar = value?.substr(0, 1).toUpperCase();
      const entry = Object.entries(logLevelMap).find(([key]) => firstChar === key);
      return entry?.[1];
    } else if (typeof value === "number") {
      return (value >= LogLevels.SILLY && value <= LogLevels.CRITICAL) || value === LogLevels.NONE ? value : undefined;
    }
    return undefined;
  }

  meta: Payload;
  logLevel?: LogLevels;

  private constructor(tag?: string, meta?: Payload, logLevel?: LogLevels) {
    if (logLevel) {
      this.logLevel = logLevel;
    } else if (Logger.isNode) {
      this.logLevel = Logger._parseLogLevel(process.env.LOG_LEVEL);
    }

    let sanitizedTag = tag ?? "default";
    if (/\.(?:tsx?|jsx?)$/i.test(sanitizedTag)) {
      if (Logger.isNode && sanitizedTag.startsWith(process.cwd())) {
        sanitizedTag = sanitizedTag.replace(process.cwd(), "");
      }
      sanitizedTag = sanitizedTag.replace(
        /^(?:[/\\]?(?:src|dist|build|public)[/\\])?[/\\]?(.*?)\.(?:tsx?|jsx?)$/,
        "$1",
      );
    }

    this.meta = {
      ...Logger._globalMetaData,
      ...meta,
      tag: sanitizedTag,
    };
  }

  silly(message: string, payload?: Payload): Logger {
    return this._logInternal(LogLevels.SILLY, message, payload);
  }

  trace(message: string, payload?: Payload): Logger {
    return this._logInternal(LogLevels.SILLY, message, payload);
  }

  debug(message: string, payload?: Payload): Logger {
    return this._logInternal(LogLevels.DEBUG, message, payload);
  }

  info(message: string, payload?: Payload): Logger {
    return this._logInternal(LogLevels.INFO, message, payload);
  }

  warn(message: string, payload?: Payload): Logger {
    return this._logInternal(LogLevels.WARN, message, payload);
  }

  error(message: string, payload?: Payload): Logger;
  error(message: string, error?: Error): Logger;
  error(error: Error): Logger;
  error(...args: [string, (Error | Payload)?] | [Error]): Logger {
    return this._logExceptionInternal(LogLevels.ERROR, ...args);
  }

  critical(message: string, payload?: Payload): Logger;
  critical(message: string, error?: Error): Logger;
  critical(error: Error): Logger;
  critical(...args: [string, (Error | Payload)?] | [Error]): Logger {
    return this._logExceptionInternal(LogLevels.CRITICAL, ...args);
  }

  private _dispatchToHandlers(logEntry: LogEntry) {
    for (const handler of Logger._handlers) {
      handler(logEntry);
    }
  }

  private _logInternal(level: LogLevels, message: string, payloadRaw?: Payload): Logger {
    const logLevel =
      this.logLevel ??
      Logger._parseLogLevel(global?.LOG_LEVEL) ??
      Logger._parseLogLevel(window?.LOG_LEVEL) ??
      Logger.defaultLevel;
    if (!Logger.enabled || level < logLevel) {
      return this;
    }

    const hasPayload = typeof payloadRaw !== "undefined" && payloadRaw !== null;
    let payload: any = null;
    try {
      payload = hasPayload ? Logger._destroyCircular(payloadRaw, [], true) : undefined;
    } catch (error) {
      payload = `[${error.message}]`;
    }

    this._dispatchToHandlers({
      timestamp: new Date(),
      level,
      message,
      payload,
      meta: this.meta,
    });

    return this;
  }

  private _logExceptionInternal(level: LogLevels, ...args: [string, (Error | Payload)?] | [Error]): Logger {
    const logLevel =
      this.logLevel ??
      Logger._parseLogLevel(global?.LOG_LEVEL) ??
      Logger._parseLogLevel(window?.LOG_LEVEL) ??
      Logger.defaultLevel;
    if (!Logger.enabled || level < logLevel) {
      return this;
    }

    let message: string = "";
    let payload: Payload | undefined;

    if (typeof args[0] === "string" || args[0] instanceof String) {
      message = args.splice(0, 1)[0] as string;
    }

    if (args[0] instanceof Error) {
      const error = args[0];
      if (message.length === 0) {
        message = error.message;
      }
      payload = { error };
    } else if (typeof args[0] === "object") {
      payload = { ...(args[0] as object) };
    }

    return this._logInternal(level, message, payload);
  }
}

export function createTTYLogger(forceColor: boolean = false): LogHandlerFunc {
  const logLevelColors = {
    [LogLevels.SILLY]: "\x1b[4m\x1b[2m\x1b[37m",
    [LogLevels.DEBUG]: "\x1b[4m\x1b[2m\x1b[37m",
    [LogLevels.INFO]: "\x1b[4m\x1b[1m\x1b[37m",
    [LogLevels.WARN]: "\x1b[4m\x1b[33m",
    [LogLevels.ERROR]: "\x1b[4m\x1b[31m",
    [LogLevels.CRITICAL]: "\x1b[41m\x1b[30m",
    [LogLevels.NONE]: "",
  };

  const forceColorEnv = ["true", "on", "yes", "1"].includes(String(process?.env?.FORCE_COLOR).toLowerCase());

  const supportsColor = (): boolean => {
    if (forceColor || forceColorEnv) {
      return true;
    }

    if (Logger.isReactNative) {
      return true;
    }

    if (!Logger.isNode) {
      return false;
    }

    if (!process.stdout?.isTTY) {
      return false;
    }

    if (process.platform === "win32") {
      return true;
    }

    if (Logger.isCI) {
      return true;
    }

    if (/-256(color)?$/i.test(process.env.TERM)) {
      return true;
    }

    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
      return true;
    }

    if (process.env.COLORTERM) {
      return true;
    }

    return false;
  };

  const enableColors = supportsColor();

  let stringify: (value: Payload) => string;
  try {
    const util = require("util");
    stringify = (value) => util.inspect(value, false, null, enableColors);
  } catch (error) {
    stringify = (value) => JSON.stringify(value, null, 2);
  }

  return function log({ level, message, payload, meta }: LogEntry) {
    const logFunc = ConsoleLogFuncs[level];
    if (enableColors) {
      const log = [
        `\x1b[35m[${meta?.tag}]`,
        logLevelColors[level] + LogLevelNames[level] + "\x1b[0m",
        `\x1b[37m${message}`,
      ].join(" ");
      if (payload) {
        logFunc(
          log,
          "\x1b[2m\n" + stringify(payload) + "\x1b[0m",
        );
      } else {
        logFunc(log);
      }
    } else {
      const log = [`[${meta?.tag}]`, LogLevelNames[level], message].join(" ");
      if (payload) {
        logFunc(log, "\n" + stringify(payload));
      } else {
        logFunc(log);
      }
    }
  };
}

export function createBrowserLogger(): LogHandlerFunc {
  return function log({ level, message, payload, meta }: LogEntry) {
    const logFunc = ConsoleLogFuncs[level];
    if (payload && typeof console.groupCollapsed === "function") {
      console.groupCollapsed(`%c[${meta?.tag}] %c${message}`, "color:magenta;", "color:black;font-weight:normal");
      logFunc(payload);
      console.groupEnd();
    } else if (payload) {
      logFunc(`%c[${meta?.tag}] %c${message}`, "color:magenta;", "color:black;", payload);
    } else {
      logFunc(`%c[${meta?.tag}] %c${message}`, "color:magenta;", "color:black;");
    }
  };
}

export function createJsonConsoleLogger() {
  return function log(logEntry: LogEntry) {
    const logFunc = ConsoleLogFuncs[logEntry.level];
    logFunc(
      JSON.stringify({
        ...logEntry,
        timestamp: logEntry.timestamp.toISOString(),
        level: LogLevelNames[logEntry.level],
      }),
    ); 
  };
}

export function createDefaultLogger(forceColor?: boolean): LogHandlerFunc {
  const logTTY = createTTYLogger(forceColor);
  const logBrowser = createBrowserLogger();
  const logJson = createJsonConsoleLogger();

  return function log(logEntry: LogEntry) {
    if (Logger.isBrowser && !Logger.isIE && (!Logger.isReactNative || Logger.isReactNativeDebugger)) {
      return logBrowser(logEntry);
    } else if (Logger.isBrowser || process.stdout?.isTTY) {
      return logTTY(logEntry);
    } else {
      return logJson(logEntry);
    }
  };
}