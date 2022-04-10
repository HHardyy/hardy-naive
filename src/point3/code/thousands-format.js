/*
 * @Author: 小方块 
 * @Date: 2022-04-06 00:22:44 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-06 00:47:54
 */
module.exports.thousandsFormat = thousandsFormat = function (num = 0) {
  let str = num.toString()
  let arr = str.split('').reverse()
  return arr.reduce((pre, curr, index) => {
    if (index % 3 === 0) {
      if (pre) {
        return `${curr},${pre}`
      } else return curr
    } else return curr + pre
  })
}

module.exports.thousandsFormat1 = thousandsFormat1 = function (num = 0) {
  let str = num.toString(), res = '', length = str.length
  for (let i = length - 1; i >= 0; i--) {
    let j = length - i
    if (j % 3 === 0) {
      if (i === 0) res = str[i] + res
      else res = ',' + str[i] + res
    } else res = str[i] + res
  }
  return res
}