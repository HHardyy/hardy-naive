const { moveZero, moveZero1 } = require('../code/move-zero')

describe('移动0到数组末尾', () => {
  const list = [0, 1, 2, 0, 3, 0, 4, 0, 0, 5]
  const result = [1,2,3,4,5,0,0,0,0,0]
  it('空数组', () => {
    const result = moveZero([])
    expect(result).toEqual([])
  });

  it('移动0到末尾', () => {
    const r = moveZero(list)
    expect(r).toEqual(result)
  });

  it('移动0到末尾1', () => {
    const r = moveZero1(list)
    expect(r).toEqual(result)
  });
});
  