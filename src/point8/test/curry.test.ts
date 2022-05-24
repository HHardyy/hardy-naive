import { curry } from "../code/curry";

function add(a: number, b: number, c: number): number {
  return a + b + c
}

describe("函数科里化", () => {
  it("完整输入三个参数", () => {
    let res = curry(add)(10, 20, 30)
    expect(res).toBe(60)
  })

  it("分别输入三个参数", () => {
    let res = curry(add)(10)(20)(30)
    expect(res).toBe(60)
  })
})