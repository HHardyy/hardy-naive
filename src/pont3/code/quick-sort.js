/*
 * @Author: 小方块 
 * @Date: 2022-04-05 00:50:14 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-04-05 01:18:09
 * 
 * slice splice
 */
module.exports.quickSort = quickSort = function (list = []) {
  let len = list.length
  if (len === 0) return list

  let middleIndex = Math.floor(len / 2)
  let middleValue = list.splice(middleIndex, 1)[0]
  let left = [], right = []

  for (let i = 0; i < list.length; i++) {
    if (list[i] < middleValue) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  return quickSort(left).concat(
    [middleValue],
    quickSort(right)
  )
}