/*
 * @Author: 小方块 
 * @Date: 2022-05-10 23:36:16 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-10 23:44:25
 */
export function instanceOf(target: any, origin: any) {
  if (target === null) return false
  if (typeof target !== 'object' && typeof origin !== 'function') return false
  
  let _temp = target
  while (_temp) {
    if (_temp.__proto__ === origin.prototype) {
      return true
    }
    _temp = _temp.__proto__
  }
  return false
}

