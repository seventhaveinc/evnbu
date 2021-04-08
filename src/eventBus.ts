import { Channel } from './channel'
import { EventPayload } from './streamer'

export class EventBus {
  private readonly _maxListeners: number

  private defaultChannel!: Channel

  private channels: {
    [key: string]: Channel
  } = {}

  constructor(config?: EventBusConfig | undefined) {
    config = typeof config === 'undefined' ? {} : config
    this._maxListeners =
      config.maxListeners === undefined ? 0 : config.maxListeners
    this.onChannelDestroyed = this.onChannelDestroyed.bind(this)
    this.createMainChannel()
    this.onChannelEmit = this.onChannelEmit.bind(this)
  }

  private createMainChannel(): void {
    this.defaultChannel = new Channel('*', this._maxListeners)
    this.channels['*'] = this.defaultChannel
    this.defaultChannel
      .getEventEmitter()
      .on('channel_destroyed', (_name: string) => {
        this.createMainChannel()
      })
  }

  
  mainChannel(): Channel {
    return this.defaultChannel
  }

  
  allChannels(): Channel {
    return this.mainChannel()
  }
 

  channel(name: string): Channel {
    var channel = this.channels[name]
    if (typeof channel === 'undefined') {
      // create new channel
      channel = this.channels[name] = new Channel(name, this._maxListeners)
      channel.on(this.onChannelEmit)
      channel.getEventEmitter().on('channel_destroyed', this.onChannelDestroyed)
    }

    return channel
  }


  hasChannel(name: string): boolean {
    return Boolean(this.channels[name])
  }

  
  removeChannel(name: string): boolean {
    if (name === '*') {
      throw new Error("Can't remove default channel")
    }
    var channel = this.channels[name]
    /* istanbul ignore else */
    if (typeof channel !== 'undefined') {
      channel.destroy()

      return true
    }

    return false
  }


  private onChannelEmit(payload: EventPayload): void {
    const topicName = payload.topic
    if (this.defaultChannel.hasTopic(topicName)) {
      // subscribers for topic on all available channels
      var topicPayload = {
        topic: payload.topic,
        channel: payload.channel,
        payload: payload.payload
      }

      this.defaultChannel
        .topic(topicName)
        .getEventEmitter()
        .emit(topicName, topicPayload)
    }
    this.defaultChannel
      .getEventEmitter()
      .emit(this.defaultChannel.name, payload) // for all subscribers
  }

  
  private onChannelDestroyed(name: string): void {
    delete this.channels[name]
  }

  
  getAllChannels(): Channel[] {
    return Object.values(this.channels)
  }

  
  destroy(): void {
    for (const channel in this.channels) {
      this.channels[channel]!.destroy()
    }
  }
}


export declare interface EventBusConfig {
  
  maxListeners?: number
}