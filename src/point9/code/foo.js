/*
 * @Author: 小方块 
 * @Date: 2022-05-18 23:37:37 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-18 23:38:47
 */
function Foo() { }


Foo.a = function () { console.log('a') }
Foo.prototype.a = function () { console.log('aa') }

Foo.a()