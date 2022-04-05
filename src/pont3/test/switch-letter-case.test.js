const { switchLetterCase, switchLetterCase1 } = require('../code/switch-letter-case')

describe('字符串中大小写转换', () => {
  let str = '100aBcDeF'
  let res = '100AbCdEf'

  it('正则表达式', () => {
    const r = switchLetterCase(str)
    expect(r).toEqual(res)
  });

  it('ASCLL 编码', () => {
    const r = switchLetterCase1(str)
    expect(r).toEqual(res)
  });
});
