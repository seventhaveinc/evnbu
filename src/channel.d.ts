import { Streamer } from './streamer';
import { Topic } from './topic';
export declare class Channel extends Streamer {
    topics: {
        [key: string]: Topic;
    };
    constructor(name: string, maxListeners?: number);
    emit(payload?: any | undefined): void;
    topic(name: string): Topic;
    hasTopic(name: string): boolean;
    removeTopic(name: string): boolean;
    getAllTopics(): Topic[];
    private _onTopicEmit;
    private _onTopicDestroyed;
    destroy(): void;
}
