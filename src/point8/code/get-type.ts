/*
 * @Author: 小方块 
 * @Date: 2022-05-05 23:40:54 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-05 23:51:38
 * 
 * 手写一个函数， 传入任意变量， 获取类型
 * 如 sting number boolean, object, array, regexp等
 */

export const getType = (target: any): any => {
  const originType = Object.prototype.toString.call(target)
  const spaceIndex = originType.indexOf(' ')
  return originType.slice(spaceIndex + 1, -1).toLowerCase()
}

