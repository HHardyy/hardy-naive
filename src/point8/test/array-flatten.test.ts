import { flatten1, flatten2 } from "../code/array-flatten";

describe("数组扁平化", () => {
  const result = [ 1, 2, 3, 4, [ 5, 6 ] ]
  it("空数组", () => {
    const res = flatten1([])
    expect(res).toEqual([])
  })
  it("push", () => {
    const arr1 = [1, 2, [3, 4, [5, 6]]]
    const res = flatten1(arr1)
    expect(res).toEqual(result)
  })

  it('concat', () => {
    const arr2 = [1, 2, [3, 4, [5, 6]]]
    const res = flatten2(arr2)
    expect(res).toEqual(result)
  })
})
