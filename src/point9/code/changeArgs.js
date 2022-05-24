function changeArgs(x) { 
  x = 200
}

let num = 100
changeArgs(num)

console.log('num:', num);

let obj = { name: 'hardy' }
changeArgs(obj)

console.log('obj:', obj)