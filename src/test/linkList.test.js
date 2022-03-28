const { createLinkList, reverseLinkList } = require('../code/linkList')
const { LinkListQueue } = require('../code/linkListQueue')

describe("链表测试", () => {
  const sourceList = [100, 200, 300]
  const resultLinkListString = '{"value":100,"next":{"value":200,"next":{"value":300}}}'
  const resultReverseLinkString = '{"value":300,"next":{"value":200,"next":{"value":100}}}'
  let linkNode = createLinkList(sourceList)
  test('创建单向链表', () => {
    expect(JSON.stringify(linkNode)).toBe(resultLinkListString)
  })
  test('反转单向链表', () => {
    let reverseNode = reverseLinkList(linkNode)
    expect(JSON.stringify(reverseNode)).toBe(resultReverseLinkString)
  })
})

describe("链表实现队列", () => {
  it('链表（add, remove, length）', () => {
    const queue = new LinkListQueue()
    expect(queue._length()).toBe(0)
    expect(queue.remove()).toBe(null)

    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue._length()).toBe(3)
  })
})

describe("数组队列 && 链表队列", () => {
  it("链表队列进出时间 与 数组队列进出时间比较", () => {
    const queue1 = new LinkListQueue()
    let _t1 = Date.now()
    for (let i = 0; i < 10000 * 10; i++) {
      queue1.add(i)
    }
    for (let i = 0; i < 10000 * 10; i++) {
      queue1.remove(i)
    }
    let time1 = Date.now() - _t1
    // console.log('time1:', time1);
    
    const queue2 = []
    let _t2 = Date.now()
    for (let i = 0; i < 10000 * 10; i++) {
      queue2.push(i)
    }
    for (let i = 0; i < 10000 * 10; i++) {
      queue2.shift(i)
    }
    let time2 = Date.now() - _t2
    // console.log('time2', time2);
    expect(time2>time1).toBeTruthy()
  })
})