var arr = ['1', '2', '3'];
var result = arr.map((item, index) => {
  const _item = parseInt(item, index)
  console.log('item: ', item, index);
  console.log('item: ', _item);
  return _item
});
console.log(result);
