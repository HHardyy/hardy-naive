const { fibonacci, fibonacci1 } = require('../code/fibonacci')

describe('斐波那契数列', () => {
  
  it('递归, 时间复杂度超差的，基本不可用', () => {
    const result = fibonacci(9)
    expect(result).toBe(34)
  });

  it('计数 O(n)', () => {
    const result = fibonacci1(9)
    expect(result).toBe(34)
  });

  it('0， 1， n小于0', () => {
    const result0 = fibonacci1(0)
    expect(result0).toBe(0)
    const result1 = fibonacci1(1)
    expect(result1).toBe(1)
    const result2 = fibonacci1(-1)
    expect(result2).toBe(0)
  });
});
