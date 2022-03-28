/*
 * @Author: 小方块 
 * @Date: 2022-03-29 00:09:34 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-03-29 00:54:53
 */

/**
 * 两数之和等于n On^2
 * @param {list} Array
 * @param {number} n
*/
module.exports.findTowNumber1 = function (list = [], n) {
  const res = []
  const len = list.length
  if (len === 0) return res
  let flag = false
  for (let i = 0; i < len; i++) {
    let n1 = list[i]

    for (let j = i + 1; j < len; j++) {
      let n2 = list[j]
      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }

    if (flag) break
  }
  return res
}

/**
 * 双指针，复杂度降到O(n)
*/
module.exports.findTowNumber2 = function (list = [], n) {
  const res = []
  const len = list.length
  if (len === 0) return res

  let startIndex = 0
  let endIndex = len - 1

  while (startIndex < endIndex) {
    let n1 = list[startIndex]
    let n2 = list[endIndex]

    const sum = n1 + n2

    if (sum > n) {
      endIndex--
    } else if (sum < n) {
      startIndex++
    } else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}