import EventBus from '../code/eventBus'

describe('eventbus', () => {
  it('on emit', () => {
    const bus = new EventBus()

    const fn1 = jest.fn()
    const fn2 = jest.fn()
    const fn3 = jest.fn()

    bus.on('ev1', fn1)
    bus.on('ev2', fn2)
    bus.once('ev3', fn3)

    bus.emit('ev1', 10)
    bus.emit('ev2', 20, 30)
    bus.emit('ev3', 30, 40, 50)

    expect(fn1).toBeCalledWith(10)
    expect(fn2).toBeCalledWith(20, 30)
    expect(fn3).toBeCalledWith(30, 40, 50)
  })
})