/*
 * @Author: 小方块 
 * @Date: 2022-05-10 23:00:40 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-10 23:12:45
 */
export function curry(fn: any) {
  let _temps: any[] = []
  let fnLen = fn.length

  return function calc(...args: any[]) {
    _temps = [..._temps, ...args]
    if (_temps.length >= fnLen) {
      return fn.apply(this, _temps.slice(0, fnLen))
    } else {
      return calc
    }
  }
}

