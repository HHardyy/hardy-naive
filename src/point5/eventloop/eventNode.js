console.info('start');

setImmediate(() => { 
  console.info('setImmediate')
})

setTimeout(() => {
  console.info('settimeout')
});

Promise.resolve().then(() => {
  console.log('promise then');
})

process.nextTick(() => {
  console.info('nextTick')
})
console.info('end')