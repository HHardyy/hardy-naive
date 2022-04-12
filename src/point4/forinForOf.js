const _ = require('lodash')
const users = [
  { target: 1, name: 'hardy1', age: 18 },
  { target: 1, name: 'hardy2', age: 19 },
  { target: 4, name: 'hardy3', age: 20 },
  { target: 3, name: 'hardy4', age: 19 },
  { target: 2, name: 'hardy5', age: 22 },
  { target: 2, name: 'hardy6', age: 18 },
]

// const group = _.groupBy(users, 'target')

// for (let item of users) {
//   console.log(item);
// }

// const obj = { name: 'hardy' }
// console.log(Object.getOwnPropertyDescriptors(obj));

// const arr = [1, 2, 3]
// console.log(arr[Symbol.iterator]);

const createPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success:' + num)
    }, 500);
  })
}

(async function () {
  let list = [createPromise(100), createPromise(200), createPromise(300)]
  for await (let res of list) {
    console.log(res);
  }
})()