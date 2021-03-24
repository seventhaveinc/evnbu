/// <reference types="node" />
import { EventEmitter } from 'events';
export declare class Streamer {
    emitter: EventEmitter;
    private readonly _name;
    constructor(name: string, maxListeners?: number);
    get name(): string;
    emit(payload?: EventPayload | undefined): void;
    addListener<T>(listener: Listener<T>): Subscription;
    on<T>(listener: Listener<T>): Subscription;
    prependListener<T>(listener: Listener<T>): Subscription;
    once<T>(listener: Listener<T>): Subscription;
    prependOnceListener<T>(listener: Listener<T>): Subscription;
    removeListener(listener: Listener): void;
    off(listener: Listener): void;
    removeAllListeners(): void;
    getMaxListeners(): number;
    setMaxListeners(n: number): void;
    getEventEmitter(): EventEmitter;
    listeners(): Listener[];
    rawListeners(): Listener[];
    listenerCount(): number;
    private _proxyListener;
    private _createUnsubscribe;
    private _addListener;
    destroy(): void;
}
export interface EventPayload<T = any> {
    channel: string;
    topic: string;
    readonly payload?: T;
}
export declare type Listener<T = any | undefined> = (event: EventPayload<T>) => void;
export declare type Subscription = () => void;
