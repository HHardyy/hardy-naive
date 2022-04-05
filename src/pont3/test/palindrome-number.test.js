/*
 * @Author: 小方块 
 * @Date: 2022-04-03 22:16:08 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-05 23:59:54
 */
const { palindromeNumber, palindromeNumber1, palindromeNumber2 } = require('../code/palindrome-number')

describe('查找对称数', () => {
  let max = 30
  let res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22]

  it('循环反转匹配查找对称数', () => {
    const result = palindromeNumber(max)
    expect(result).toEqual(res)
  });

  it('头尾比较', () => {
    const result = palindromeNumber1(max)
    expect(result).toEqual(res)
  })

  it('反转数字', () => {
    const result = palindromeNumber2(max)
    expect(result).toEqual(res)
  })
});

