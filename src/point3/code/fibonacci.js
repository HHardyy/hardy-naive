/*
 * @Author: 小方块 
 * @Date: 2022-03-31 01:22:48 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-01 00:15:57
 */

/**
 * @param {n}
 * 大量重复计算， 时间复杂度达到O(2^n)
 */
exports.fibonacci = fibonacci = function (n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

exports.fibonacci1 = fibonacci = function (n) {
  if (n <= 0) return 0
  if (n === 1) return 1

  let n1 = 1     // f(n-1)
  let n2 = 0     // f(n-2)
  let r = 0

  let index = 2
  while (index <= n) {
    r = n1 + n2
    n2 = n1
    n1 = r
    index++
  }
  return r
}
