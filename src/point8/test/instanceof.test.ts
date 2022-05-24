/*
 * @Author: 小方块 
 * @Date: 2022-05-10 23:44:49 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-10 23:47:58
 */
import { instanceOf } from "../code/instanceOf";

describe('instanceof', () => {
  it('数组', () => {
    let res = instanceOf({}, Object)
    expect(res).toBe(true)
  })
  it('对象', () => {
    let res = instanceOf({}, null)
    expect(res).toBe(false)
  })
})