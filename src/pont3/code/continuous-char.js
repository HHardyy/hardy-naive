/*
 * @Author: 小方块 
 * @Date: 2022-04-03 22:16:13 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-03 23:17:59
 */

module.exports.findContinuousChar = findContinuousChar = function (str = '') {

  let len = str.length
  if (len === 0) return null
  let res = { char: '', length: 0 }
  for (let i = 0; i < len; i++) {
    let tempLen = 0
    for (let j = i; j < len; j++) {
      if (str[i] === str[j]) {
        tempLen++
      }
      if (str[i] !== str[j] || j === len - 1) {
        if (tempLen > res.length) {
          res.char = str[i]
          res.length = tempLen
        }
        if (i < len - 1) {
          i = j - 1
        }
        break
      }
    }
  }

  return res
}


module.exports.findContinuousChar1 = findContinuousChar1 = function (str = '') {
  let len = str.length
  if (len === 0) return null
  let res = { char: '', length: 0 }, i = 0, j = 0, tempLen = 0

  for (; i < len; i++) {
    if (str[i] === str[j]) {
      tempLen++
    }
    if (str[i] !== str[j] || i === len - 1) {
      if (tempLen > res.length) {
        res.char = str[j]
        res.length = tempLen
      }
      tempLen = 0

      if (i < len - 1) {
        j = i
        i--
      }
    }
  }

  return res
}