/*
 * @Author: 小方块 
 * @Date: 2022-03-27 22:14:23 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-03-28 01:22:08
 */
/**
 * 创建一个单向链表
 * @param { list } Array
*/
module.exports.createLinkList = function (list = []) {
  let len = list.length
  if (!len || len === 0) throw new Error('list is empty')
  let currNode = { value: list[len - 1] }
  if (len === 1) return currNode
  for (let i = len - 2; i >= 0; i--) {
    currNode = {
      value: list[i],
      next: currNode
    }
  }
  return currNode
}

/**
 * 反转单向链表
 * @param { linkListNode } 一个单向链表
*/
module.exports.reverseLinkList = function (linkListNode = null) {
  if (!linkListNode) throw new Error('linkListNode is not a linkNode')
  let prevNode = undefined, currNode = undefined, nextNode = linkListNode

  while (nextNode) {
    if (currNode && !prevNode) {
      delete currNode.next
    }

    if (currNode && prevNode) {
      currNode.next = prevNode
    }

    prevNode = currNode
    currNode = nextNode
    nextNode = nextNode ? nextNode.next : null
  }
  currNode.next = prevNode
  return currNode
}
