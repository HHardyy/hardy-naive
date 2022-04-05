/*
 * @Author: 小方块 
 * @Date: 2022-04-05 02:47:46 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-05 23:59:23
 */
module.exports.palindromeNumber = palindromeNumber = function (max = 0) {
  if (max <= 0) return []

  let res = []

  for (let i = 0; i < max; i++) {
    let s = i.toString()
    if (s === s.split('').reverse().join('')) {
      res.push(i)
    }
  }
  return res
}

module.exports.palindromeNumber1 = palindromeNumber1 = function (max = 0) {
  if (max <= 0) return []

  let res = []

  for (let i = 0; i < max; i++) {
    let str = i.toString()
    let len = str.length

    let flag = true, startIndex = 0, endIndex = len - 1

    while (startIndex < endIndex) {
      if (str[startIndex] !== str[endIndex]) {
        flag = false
        break
      } else {
        startIndex++
        endIndex--
      }
    }

    if (flag) res.push(i)
  }
  return res
}

module.exports.palindromeNumber2 = palindromeNumber2 = function (max = 0) {
  if (max <= 0) return []

  let res = []

  for (let i = 0; i < max; i++) {
    let n = i
    let rev = 0

    while (n > 0) {
      rev = rev * 10 + n % 10
      n = Math.floor(n / 10)
    }

    if (i === rev) res.push(i)
  }

  return res
} 