/*
 * @Author: 小方块 
 * @Date: 2022-03-28 01:57:33 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-03-28 02:29:16
 */
module.exports.binarySearchForEach = function (list = [], index = 0) {
  let len = list.length
  if (!len || len === 0) return -1

  let startIndex = 0
  let endIndex = len - 1

  while (startIndex <= endIndex) {
    const mindIndex = Math.floor((startIndex + endIndex) / 2)
    const mindValue = list[mindIndex]

    if (index < mindValue) {
      endIndex = mindIndex - 1
    } else if (index > mindValue) {
      startIndex = mindIndex + 1
    } else {
      return mindIndex
    }
  }
  return -1
}

function binarySearchRecursion(list = [], index, startIndex, endIndex) {
  let len = list.length
  if (len === 0) return -1

  if (startIndex == null) startIndex = 0
  if (endIndex == null) endIndex = len - 1
  
  if (startIndex > endIndex) return -1

  const mindIndex = Math.floor((startIndex + endIndex) / 2)
  const mindValue = list[mindIndex]

  if (index < mindValue) {
    return binarySearchRecursion(list, index, startIndex, mindIndex - 1)
  } else if (index > mindValue) {
    return binarySearchRecursion(list, index, mindIndex + 1, endIndex)
  } else {
    return mindIndex
  }
}

module.exports.binarySearchRecursion = binarySearchRecursion