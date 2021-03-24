import { Streamer, EventPayload, Listener } from '../src/index'

let streamer: Streamer, listener: Listener, payload: EventPayload

beforeEach(() => {
  payload = {
    channel: 'test_channel',
    topic: 'test_topic',
    payload: {
      propOne: 'one',
    },
  }
  listener = jest.fn()
  streamer = new Streamer('test')
})

describe('streamer', () => {
  describe('Initialize correctly', () => {
    test('with paramters', () => {
      const name = 'test'
      streamer = new Streamer(name)
      expect(streamer.name).toBe(name)
      expect(streamer.getEventEmitter().getMaxListeners()).toBe(0)
    })
    test('if name not provided, throw error', () => {
      expect(() => {
        streamer = new Streamer((undefined as unknown) as string)
      }).toThrow('')
    })
  })

  describe('Add listeners', () => {
    test('addListener method', () => {
      streamer.addListener(listener)

      streamer.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('on', () => {
      streamer.on(listener)

      streamer.emit(payload)

      expect(listener).toBeCalledWith(payload)
    })

    test('once method', () => {
      streamer.once(listener)

      streamer.emit(payload)
      streamer.emit(payload)

      expect(listener).toBeCalledTimes(1)
    })

    test('prependListener method', () => {
      const firstListener = jest.fn(() => {
        throw new Error()
      })
      // add first listener (should throw if called first)
      streamer.addListener(firstListener)
      streamer.prependListener(() => {
        // switch firstListener mock not to throw
        // @ts-ignore
        firstListener.mockImplementation(() => true)
      })

      expect(() => {
        streamer.emit(payload)
      }).not.toThrow()
      expect(firstListener).toBeCalled()
    })

    describe('PrependOnceListener', () => {
      test('whenever added listener should be called first', () => {
        const firstListener = jest.fn(() => {
          throw new Error()
        })
        // add first listener (should throw if called first)
        streamer.addListener(firstListener)
        streamer.prependOnceListener(() => {
          // switch firstListener mock not to throw
          // @ts-ignore
          firstListener.mockImplementation((): boolean => true)
        })

        expect(() => {
          streamer.emit(payload)
        }).not.toThrow()
        expect(firstListener).toBeCalled()
      })

      test('listener is called only once', () => {
        const listenerTwo = jest.fn()
        streamer.addListener(jest.fn())
        streamer.prependOnceListener(listenerTwo)

        streamer.emit(payload)
        streamer.emit(payload)

        expect(listenerTwo).toBeCalledTimes(1)
      })
    })

    describe('Remove listeners', () => {
      test('removeListener method', () => {
        streamer.addListener(listener)

        streamer.removeListener(listener)

        streamer.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('remove listener via off method', () => {
        streamer.addListener(listener)

        streamer.off(listener)
        streamer.emit(payload)

        expect(listener).not.toBeCalled()
      })

      test('remove listener via removeAllListeners method', () => {
        const listenerTwo = jest.fn()
        streamer.addListener(listener)
        streamer.addListener(listenerTwo)
        streamer.removeAllListeners()

        streamer.emit(payload)

        expect(listener).not.toBeCalled()
        expect(listenerTwo).not.toBeCalled()
      })

      test('unsubscribe listener via returned function ', () => {
        const subOne = streamer.addListener(listener)

        subOne()
        streamer.emit(payload)

        expect(listener).not.toBeCalled()
      })
    })
  })

  describe('Get and set number of listeners', () => {
    test('initialize with the default number (0) unlimited', () => {
      const streamer = new Streamer('test')

      expect(streamer.getEventEmitter().getMaxListeners()).toBe(0)
    })

    test('initialize with custom number', () => {
      const max = 4

      const streamer = new Streamer('_', max)

      expect(streamer.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('set maximum number of listeners listeners', () => {
      const max = 11

      streamer.setMaxListeners(max)

      expect(streamer.getEventEmitter().getMaxListeners()).toBe(max)
    })

    test('get maximum number listeners', () => {
      const max = streamer.getMaxListeners()

      expect(streamer.getEventEmitter().getMaxListeners()).toBe(max)
    })
  })
  describe('Query listeners', () => {
    test('get all listeners', () => {
      const listeners = [jest.fn(), jest.fn(), jest.fn()]

      streamer.addListener(listeners[0])
      streamer.once(listeners[1])
      streamer.addListener(listeners[2])

      expect(streamer.listeners()).toEqual(expect.arrayContaining(listeners))
    })

    test('call raw listeners method', () => {
      const listeners = [jest.fn(), jest.fn(), jest.fn()]

      streamer.addListener(listeners[0])
      streamer.addListener(listeners[1])
      streamer.once(listeners[2])

      listeners.splice(2)

      expect(streamer.rawListeners()).toEqual(
        expect.arrayContaining(listeners)
      )
    })

    test('get listener count', () => {
      streamer.addListener(jest.fn())
      streamer.once(jest.fn())
      streamer.prependListener(jest.fn())
      streamer.prependOnceListener(jest.fn())

      expect(streamer.listenerCount()).toBe(4)
    })
  })

  describe('Destroy', () => {
    test('release references', () => {
      const internalEmitter = jest.spyOn(
        streamer.emitter,
        'removeAllListeners'
      )

      streamer.destroy()

      expect(internalEmitter).toBeCalled()
    })
  })
})