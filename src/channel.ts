import { Streamer, EventPayload } from './streamer'
import { Topic } from './topic'

export class Channel extends Streamer {
  topics: {
    [key: string]: Topic
  } = {}

 
  constructor(name: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this._onTopicDestroyed = this._onTopicDestroyed.bind(this)
    this._onTopicEmit = this._onTopicEmit.bind(this)
  }

  emit(payload?: any | undefined): void {
    let payloadData = {
      channel: this.name,
      topic: '*',
      payload: payload
    }

    super.emit(payloadData)
  }

  
  topic(name: string): Topic {
    let topic = this.topics[name]
    if (typeof topic === 'undefined') {
      // create new topic
      topic = this.topics[name] = new Topic(
        name,
        this.name,
        this.getMaxListeners()
      )
      topic.getEventEmitter().on('topic_destroyed', this._onTopicDestroyed)
      topic.on(this._onTopicEmit)
    }

    return topic
  }

  
  hasTopic(name: string): boolean {
    return Boolean(this.topics[name])
  }

  
  removeTopic(name: string): boolean {
    const topic = this.topics[name]
    if (typeof topic !== 'undefined') {
      delete this.topics[name]
      topic.destroy()

      return true
    }

    return false
  }

  
  getAllTopics(): Topic[] {
    return Object.values(this.topics)
  }

  private _onTopicEmit(payload: EventPayload): void {
    super.emit(payload)
  }

  private _onTopicDestroyed(name: string): void {
    delete this.topics[name]
  }

  
  destroy(): void {
    for (let topic in this.topics) {
      this.removeTopic(topic)
    }

    this.emitter.emit('channel_destroyed', this.name)
    super.destroy()
  }
}