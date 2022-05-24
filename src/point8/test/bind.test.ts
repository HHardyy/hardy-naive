import '../code/bind'

describe('bind', () => {
  it('bind this', () => {
    function fn(this: any) {
      return this
    }

    // @ts-ignore
    let fn1 = fn.mBind({ x: 100 })
    expect(fn1()).toEqual({ x: 100 })
  })

  it('bind null', () => {
    function fn(a: number, b: number, c: number) {
      return a + b + c
    }

    //@ts-ignore
    let fn1 = fn.mBind(null, 10, 20)
    expect(fn1(30)).toBe(60)
  })
})