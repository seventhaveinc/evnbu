import { Streamer } from './streamer';
export declare class Topic extends Streamer {
    readonly channel: string;
    constructor(name: string, channel: string, maxListeners?: number);
    emit(payload?: any | undefined): void;
    destroy(): void;
}
