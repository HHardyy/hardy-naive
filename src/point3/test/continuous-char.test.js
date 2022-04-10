/*
 * @Author: 小方块 
 * @Date: 2022-04-03 22:16:08 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-03 23:18:00
 */
const { findContinuousChar, findContinuousChar1 } = require('../code/continuous-char')

describe('移动0到数组末尾', () => {
  let str = 'aaabbbbccdddddeff'
  it('不传的情况', () => {
    const r = findContinuousChar()
    expect(r).toBeNull()
  });

  it('正常最大d', () => {
    const result = findContinuousChar(str)
    expect(result).toEqual({ char: 'd', length: 5 })
  });

  it('正常最大d1', () => {
    const result = findContinuousChar1(str)
    expect(result).toEqual({ char: 'd', length: 5 })
  });
});

