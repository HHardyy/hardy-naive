/*
 * @Author: 小方块 
 * @Date: 2022-05-11 00:01:11 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-11 00:16:56
 */

// @ts-ignore
Function.prototype.mBind = function (ctx: any, ...bindArgs: any[]) {
  let _this = this
  return function b(...args) {
    let newArgs = bindArgs.concat(args)
    return _this.apply(ctx, ...newArgs)
  }
}