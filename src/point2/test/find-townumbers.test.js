const { findTowNumber1, findTowNumber2 } = require('../code/find-townumbers')

describe('循环查找On^2', () => {
  const arr = [1, 2, 4, 7, 11, 15]
  const n = 15
  const nn = 100
  const result = [4, 11]
  test('查找结果', () => {
    const res = findTowNumber1(arr, n)
    expect(res).toEqual(result)
  });
  test('找不到结果', () => {
    const res = findTowNumber1(arr, nn)
    expect(res).toEqual([])
  }); 
  test('空数组', () => {
    const res = findTowNumber1([], n)
    expect(res).toEqual([])
  });
});

describe('双指针查找On', () => {
  const arr = [1, 2, 4, 7, 11, 15]
  const n = 15
  const nn = 100
  const result = [4, 11]
  test('查找结果', () => {
    const res = findTowNumber2(arr, n)
    expect(res).toEqual(result)
  });
  test('找不到结果', () => {
    const res = findTowNumber2(arr, nn)
    expect(res).toEqual([])
  }); 
  test('空数组', () => {
    const res = findTowNumber2([], n)
    expect(res).toEqual([])
  });
});
