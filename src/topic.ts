import { Streamer } from './streamer'


export class Topic extends Streamer {
  readonly channel: string

 
  constructor(name: string, channel: string, maxListeners: number = 0) {
    super(name, maxListeners)
    this.channel = channel
  }

  emit(payload?: any | undefined): void {
    const payloadData = {
      channel: this.channel,
      topic: this.name,
      payload: payload
    }
    super.emit(payloadData)
  }

  destroy(): void {
    this.emitter.emit('topic_destroyed', this.name)
    super.destroy()
  }
}
