const { thousandsFormat, thousandsFormat1 } = require('../code/thousands-format')

describe('千分位格式化', () => {
  let num = 10201004050
  let res = '10,201,004,050'

  it('数组反转', () => {
    const r = thousandsFormat(num)
    expect(r).toEqual(res)
  });

  it('指针', () => {
    const r = thousandsFormat1(num)
    expect(r).toEqual(res)
  });
});
