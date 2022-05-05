/*
 * @Author: 小方块 
 * @Date: 2022-05-05 23:21:45 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-05 23:32:40
 */
import { flattenDeep1, flattenDeep2 } from "../code/deep-array-flatten";

describe("深层数组扁平", () => {
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const demoArr = [1, [2, [3, [4, 5], [6, [7, [8], 9]]]]]
  
  it('push', () => {
    const res = flattenDeep1(demoArr)
    expect(res).toEqual(result)
  })

  it('concat', () => {
    const res = flattenDeep2(demoArr)
    expect(res).toEqual(result)
  })
})