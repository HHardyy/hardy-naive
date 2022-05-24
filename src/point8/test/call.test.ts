import '../code/call'

describe('call && apply', () => {
  function fn(this: any) {
    return this
  }
  it('call', () => {
    // @ts-ignore
    const res = fn.mCall({ x: 100 })
    expect(res).toEqual({ x: 100 })
  })
  it('call String', () => {
    // @ts-ignore
    const res = fn.mCall('abc')
    expect(res.toString()).toBe('abc')
  })
})