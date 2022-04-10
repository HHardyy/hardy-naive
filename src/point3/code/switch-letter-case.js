/*
 * @Author: 小方块 
 * @Date: 2022-04-06 00:54:22 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-06 01:09:08
 */
module.exports.switchLetterCase = switchLetterCase = function (str = '') {
  let res = ''
  let len = str.length
  if (len === 0) return res

  let regL = /[a-z]/
  let regU = /[A-Z]/

  for (let i = 0; i < len; i++) {
    let s = str[i]
    if (regL.test(s)) {
      res += s.toUpperCase()
    } else if (regU.test(s)) {
      res += s.toLowerCase()
    } else {
      res += s
    }
  }

  return res
}


module.exports.switchLetterCase1 = switchLetterCase1 = function (str = '') {
  let res = ''
  let len = str.length
  if (len === 0) return res

  for (let i = 0; i < len; i++) {
    let s = str[i]
    let code = s.charCodeAt(0)

    if (code >= 65 && code <= 90) {
      res += s.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res += s.toUpperCase()
    } else {
      res += s
    }
  }

  return res
}