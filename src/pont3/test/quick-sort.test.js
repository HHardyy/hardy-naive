const { quickSort } = require('../code/quick-sort')

describe('快速排序', () => {
  it('排序', () => {
    let arr = [1, 6, 2, 5,7, 3, 8, 4, 9, 0]
    let arrResult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = quickSort(arr)
    expect(result).toEqual(arrResult)
  })
});
