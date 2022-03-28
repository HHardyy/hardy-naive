function LinkListNode(value, next = null) {
  this.value = value
  this.next = next
}


function LinkListQueue() {
  this.head = null
  this.tail = null
  this.length = 0
}

LinkListQueue.prototype.add = function (num) {
  let node = new LinkListNode(num)
  // head
  if (this.head === null) {
    this.head = node
  }
  // tail
  let tailNode = this.tail
  if (tailNode) {
    tailNode.next = node
  }
  this.tail = node
  this.length++
}

LinkListQueue.prototype.remove = function (num) {
  let headNode = this.head
  if (headNode === null || this.length === 0) return null

  let headValue = headNode.value
  this.head = headNode.next

  this.length--
  return headValue
}
LinkListQueue.prototype.getHead = function () {
  return this.head
}
LinkListQueue.prototype.getTail = function () {
  return this.tail
}
LinkListQueue.prototype._length = function () {
  return this.length
}

module.exports.LinkListQueue = LinkListQueue