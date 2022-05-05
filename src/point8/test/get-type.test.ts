import { getType } from "../code/get-type";

describe('获取数据类型', () => {
  it("string", () => {
    expect(getType('111')).toBe('string')
  })
  it("boolean", () => {
    expect(getType(true)).toBe('boolean')
    expect(getType(false)).toBe('boolean')
  })
  it("undefined", () => {
    expect(getType(undefined)).toBe('undefined')
  })
  it("null", () => {
    expect(getType(null)).toBe('null')
  })
  it("number", () => {
    expect(getType(123)).toBe('number')
    expect(getType(NaN)).toBe('number')
    expect(getType(Infinity)).toBe('number')
    expect(getType(-Infinity)).toBe('number')
  })
  it("symbol", () => {
    expect(getType(Symbol())).toBe('symbol')
  })
  it("bigint", () => {
    expect(getType(BigInt(100))).toBe('bigint')
  })
  it("object", () => {
    expect(getType({})).toBe('object')
  })
  it("array", () => {
    expect(getType([])).toBe('array')
  })
  it("function", () => {
    expect(getType(() => { })).toBe('function')
    expect(getType(class Foo { })).toBe('function')
  })
  it("map", () => {
    expect(getType(new Map())).toBe('map')
  })
  it("weakmap", () => {
    expect(getType(new WeakMap())).toBe('weakmap')
  })
  it("set", () => {
    expect(getType(new Set())).toBe('set')
  })
  it("weakset", () => {
    expect(getType(new WeakSet())).toBe('weakset')
  })
  it("date", () => {
    expect(getType(new Date())).toBe('date')
  })
  it("regexp", () => {
    expect(getType(new RegExp(''))).toBe('regexp')
  })
  it("error", () => {
    expect(getType(new Error(''))).toBe('error')
  })
  it("promise", () => {
    expect(getType(Promise.resolve())).toBe('promise')
  })
})