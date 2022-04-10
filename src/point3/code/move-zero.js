/*
 * @Author: 小方块 
 * @Date: 2022-04-02 01:25:31 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-03 21:58:46
 */

module.exports.moveZero = moveZero = function (list = []) {
  let len = list.length

  if (len === 0) return []

  let zeroLen = 0

  for (let i = 0; i < len - zeroLen; i++) {
    if (list[i] === 0) {
      list.push(list[i])
      list.splice(i, 1)
      i--
      zeroLen++
    }
  }

  return list
}

module.exports.moveZero1 = moveZero1 = function (list = []) {
  let len = list.length
  if (len === 0) return []

  let currNzindex = -1
  for (let i = 0; i < len; i++) {

    if (list[i] === 0) {
      if (currNzindex < 0) {
        currNzindex = i
      }
    }

    if (list[i] !== 0 && currNzindex >= 0) {
      let n = list[i]
      list[i] = list[currNzindex]
      list[currNzindex] = n
      currNzindex++
    }
  }

  return list
}