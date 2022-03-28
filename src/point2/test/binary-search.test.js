const { binarySearchForEach, binarySearchRecursion } = require('../code/binary-search')

describe('二分查找', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const target = 6
  const nTarget = 10
  it('循环查找', () => {
    const index = binarySearchForEach(arr,target)
    expect(index).toBe(5)
  })

  it('递归查找', () => {
    let index = binarySearchRecursion(arr, target, null, null)
    expect(index).toBe(5)
  })

  it('查找不存在数组中的', () => {
    const index = binarySearchForEach(arr,nTarget)
    expect(index).toBe(-1)
  })
});
