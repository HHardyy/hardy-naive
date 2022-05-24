/*
 * @Author: 小方块 
 * @Date: 2022-05-11 23:59:33 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-12 00:21:26
 */
export default class EventBus {
  private events: {
    [key: string]: Array<{ fn: Function, isOnce: Boolean }>
  }
  constructor() {
    this.events = {}
  }
  on(type: string, fn: Function, isOnce: Boolean = false) {
    if (!this.events[type]) {
      this.events[type] = []
    }

    this.events[type].push({ fn, isOnce })
  }

  once(type: string, fn: Function) {
    this.on(type, fn, true)
  }

  emit(type: string, ...args: any) {
    const _event = this.events[type]
    if (!_event) return

    this.events[type] = _event.filter(_e => {
      const { fn, isOnce } = _e
      fn(...args)
      return !isOnce ? true : false
    })
  }

  off(type: string, fn: Function) {
    const _event = this.events[type]
    if (!_event) return

    if (!fn) {
      this.events[type] = []
    } else {
      this.events[type] = _event.filter(f => f.fn !== fn)
    }
  }
}