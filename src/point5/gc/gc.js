// function fun(){
//   const a = '1'
//   console.log(a)

//   const obj = { name: 'hardy' }
//   console.log(obj)
// }
// fun()


// function getData() {
//   const data = {}
//   return {
//     get(key) {
//       return data[key]
//     },
//     set(key, value) {
//       data[key] = value
//     }
//   }
// }
// const { get, set } = getData()
// set('name', 'hardy')
// console.log(get('name'))



// 循环引用
function gcLoop() {
  const obj1 = {}
  const obj2 = {}
  obj1.a = obj2
  obj2.a = obj1
}
gcLoop()

//内存泄漏: 老IE 6 - 7
var div = document.getElementById('div')
div.a = div
div.somBigData = {}


// 标记清除 