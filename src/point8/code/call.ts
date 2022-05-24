/*
 * @Author: 小方块 
 * @Date: 2022-05-11 23:32:05 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-11 23:41:08
 * call && apply
 */

// @ts-ignore
Function.prototype.mCall = function (ctx: any, ...args: any[]): any {
  if (ctx === null) ctx = globalThis
  if (typeof ctx !== 'object') ctx = new Object(ctx)

  const mKey = Symbol()
  ctx[mKey] = this

  const res = ctx[mKey](...args)
  delete ctx[mKey]

  return res
}

// @ts-ignore
Function.prototype.mApply = function (ctx: any, args: any[] = []): any {
  if (ctx === null) ctx = globalThis
  if (typeof ctx !== 'object') ctx = new Object(ctx)

  const mKey = Symbol()
  ctx[mKey] = this

  const res = ctx[mKey](...args)
  delete ctx[mKey]

  return res
}