import { EventEmitter } from 'events'

type ListenerProxy = keyof Pick<
  EventEmitter,
  | 'addListener'
  | 'on'
  | 'once'
  | 'prependListener'
  | 'prependOnceListener'
  | 'removeListener'
>

export class Streamer {
  emitter: EventEmitter

  private readonly _name: string

 
  constructor(name: string, maxListeners = 0) {
    this.emitter = new EventEmitter()
    if (typeof name === 'undefined' || name.length === 0) {
      throw new Error('Broadcaster must have a name')
    }
    this._name = name
    this.emitter.setMaxListeners(maxListeners)
  }

  get name(): string {
    return this._name
  }

  
  emit(payload?: EventPayload | undefined): void {
    this.emitter.emit(this._name, payload)
  }

  
  addListener<T>(listener: Listener<T>): Subscription {
    return this._addListener('addListener', listener)
  }

 
  on<T>(listener: Listener<T>): Subscription {
    return this.addListener(listener)
  }

 
  prependListener<T>(listener: Listener<T>): Subscription {
    return this._addListener('prependListener', listener)
  }

  
  once<T>(listener: Listener<T>): Subscription {
    return this._addListener('once', listener)
  }

  
  prependOnceListener<T>(listener: Listener<T>): Subscription {
    return this._addListener('prependOnceListener', listener)
  }

  
  removeListener(listener: Listener): void {
    this._proxyListener('removeListener', listener)
  }


  off(listener: Listener): void {
    this.removeListener(listener)
  }

  removeAllListeners(): void {
    this.emitter.removeAllListeners(this._name)
  }

  
  getMaxListeners(): number {
    return this.emitter.getMaxListeners()
  }

  setMaxListeners(n: number): void {
    this.emitter.setMaxListeners(n)
  }

 
  getEventEmitter(): EventEmitter {
    return this.emitter
  }

  
  listeners(): Listener[] {
    return this.emitter.listeners(this._name) as Listener[]
  }


  rawListeners(): Listener[] {
    return this.emitter.rawListeners(this._name) as Listener[]
  }

 
  listenerCount(): number {
    return this.emitter.listenerCount(this._name)
  }

  private _proxyListener(method: ListenerProxy, listener: Listener): void {
    this.emitter[method](this._name, listener)
  }

  private _createUnsubscribe(listener: Listener): Subscription {
    return (): void => {
      this.emitter.removeListener(this._name, listener)
    }
  }

  private _addListener(
    method: ListenerProxy,
    listener: Listener
  ): Subscription {
    this._proxyListener(method, listener)

    return this._createUnsubscribe(listener)
  }

  
  destroy(): void {
    this.emitter.removeAllListeners()
  }
}


export interface EventPayload<T = any> {
  
  channel: string
  
  topic: string
 
  readonly payload?: T
}

export type Listener<T = any | undefined> = (event: EventPayload<T>) => void


export type Subscription = () => void