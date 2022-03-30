const { bst } = require('../code/bst')
const { getKValue1 } = require('../code/binary-search-tree')
describe('二叉搜索树', () => {
  it('查找二叉树中的第k小值', () => {
    const res = getKValue1(bst, 3)
    expect(res).toBe(2)
  });

  it('k 不在范围之内', () => {
    const res1 = getKValue1(bst, 0)
    expect(res1).toBeNull()

    const res2 = getKValue1(bst, 1000)
    expect(res2).toBeNull()
  })
});
