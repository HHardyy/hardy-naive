g## 一、数据结构与算法
### 1、算法复杂度
#### 什么是复杂度
- 程序执行时需要的计算量和内存空间（和代码是否简洁无关）
- 复杂度是数量级， 不是具体数字

#### 时间复杂度
程序执行时需要的计算量(cpu)
- O(1) 一次就够 （执行一次）
```javascript
const fn = (obj = {}, key) => obj[key] 
```
- O(n) 和传输的数据量一样 （输入1， 执行1次）
```javascript
const fn = (arr=[]) => {
  for(let i=0;i<arr.length;i++>){
    console.info(arr[i])
  }
}
```
- O(n^2) 数据量的平方 （输入100， 执行10000次）
```javascript
const fn = (arr=[]) => {
  for(let i=0;i<arr.length;i++>){
    for(let j=0;j<arr.length;j++){
      console.info(arr[i], arr[j])
    }
  }
} 
```
- O(logn) 数据量的对数 （输入1执行1， 输入100执行10， 输入1e执行10000）
> 二分

- O(n*logn) 数据量 * 数据量的对数
```javascript
for() {
  // 二分
}
```
#### 空间复杂度
程序执行时需要的内存空间   
- O(1) 有限的， 可数的空间
```javascript
const a = arr[1]
const b = arr[2]
const c = arr[3]
...
```
- O(n) 和输入的数据量相同的空间
```javascript
const arr = []
const arr2 = []
for(let i=0;i<arr.length;i++>) {
  arr2[i] = arr[i]       
}
```
#### 几道算法题
- 1、讲一个数组旋转k步 (rotate.ts)
- 2、用js实现快速排序， 并说明时间复杂度
- 3、判断字符串是否括号匹配
```bash
1)、一个字符串s可能包含{ } ()[]三种括号
2)、判断s是否是括号匹配的
3)、如(a{b}c)匹配， 而{a(b或{a(b}c)就不匹配
```
- 4、反转单向链表

#### 算法面试题
##### 1、给一个数组， 找出其中和为n的两个元素
- 有一个递增的数组[1,2,4,7,11,15]和一个n=15
- 数组中有两个数， 和是n。即4+ 11 = 15
```bash
dir for findTwoNumbers
```
> 数组，链表是物理结构； 队列，栈是逻辑结构

### 2、二叉树
#### 树的遍历方式
- 前序遍历 (abc)
- 中序遍历 (bac)
- 后序遍历 (bca)

#### 二叉搜索树 （bst ）
- left (包括其后代) value <= root value
- right (包括其后代) value >= root value
- 可用二分法进行快速查找

#### 为什么需要二叉树
- 数组： 查询快O(1)， 增删慢O(n)
- 链表： 查询慢O(n),  增删快O(1)
> 所以形成了 "木桶效应"

- 二叉搜索树 BST ： 查找快， 增删快 (正好解决了木桶效应)
> 规避数组， 链表的性能问题

#### 平衡二叉树（BBST）
- BST 如果不平衡， 就成了链表
- 所以要尽量平衡: 平衡二叉树（BBST）
- BBST增删查， 时间复杂度都是O(logn), 即树的高度

#### 红黑树
- 一种自平衡二叉树
- 分为 红/黑 两种颜色， 通过颜色转换来维持树的平衡
- 相对于普通平衡二叉树， 它维持平衡的效率更高
#### B树
- 物理上是多叉树，但逻辑上是二叉树
- 一般用于高效I/O， 关系型数据库常用B树来组织数据
### 堆栈模型
JS代码执行时
- 值类型变量，存储在栈
- 引用类型变量，存储在堆
#### 堆
- 完全二叉树
- 最大堆： 父节点>=子节点
- 最小堆： 父节点<=子节点
- 逻辑上是一颗二叉树， 物理结构是个数组（数组好处是适合连续存储 + 节省空间）
#### 堆使用场景
- 堆的数据，都是在栈中引用的， 不需要从root遍历
- 堆恰巧是数组形式， 根据栈的地址， 可用O(1)找到目标 

### 基础面试题 （point 4）
####  ajax， fetch, axios的区别？
####  箭头函数的缺点， 哪里不能用箭头函数?
####  Vue组件通讯方式有几种？尽量说全面
#### 节流和防抖
- 两者有什么区别
- 分别用于什么场景
##### 防抖
限制执行次数， 多次密集的触发只执行一次
##### 节流
限制执行频率， 有节奏执行
> 节流关注“过程”， 防抖关注“结果”

#### px % em rem vw/vh 有什么区别
- px 基本单位， 绝对单位
- %  相对于父元素的宽度比例
- em 相对于当前元素的font-size
- rem 相对于根节点的font-size
- vw / vh  屏幕宽度的1% /  屏幕高度的1% (vmin  两者的最小值， vmax两者的最大值)

#### 箭头函数
- 箭头函数有什么缺点？
- 什么时候不能使用箭头函数？

缺点：
```javascript
1、没有arguments
2、没法通过call、apply、bind改变this，this永远指向定义的时候的父级作用域
3、很low的写法
demo1: 写的比较迷 
const fn = (a, b) => b === undefined ? b => a * b : a * b

demo2: 对象的方法不能使用箭头函数
const obj = {
  name: 'hardy',
  getName: () => {
    return this.name
  }
}
console.log(obj.getName())  // 空

demo3: 原型上的方法
const obj = { name: 'hardy' }
obj.__proto__.getName = () => {
  return this.name
}
console.log(obj.getName())  // 空

demo4: 构造函数也不能使用
const Foo = (name, age) => {
  this.name = name
  this.age = age
}
const f = new Foo('hardy', 18)

demo5: 动态上下文中的回调函数
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  this.innerHTML = 'clicked'
})

demo6: Vue的生命周期和method也不行
{
  data(){
    return {
      name: 'hardy'
    }
  },
  methods: {
    getName: () => {
      return this.name
    }
  },
  mounted: () => {
    console.log('msg', this.name)
  }
}
！！！ 因为vue组件本质上是一个js对象， 但是react可以， 因为react组件（非hooks）本质上是一个ES6的class
```  
#### for in 和 for of 有什么区别
- 遍历对象： for in 可以， for of 不可以
- 遍历Map, Set: for of 可以， for in 不可以
- 遍历generator: for of 可以， for in 不可以
##### 可枚举 && 可迭代
- 1、for in 用于可枚举数据， 如对象、数组、字符串
```javascript
const obj = { name: 'hardy' }
console.log(Object.getOwnPropertyDescriptors(obj));

// log
{
  name: {
    value: 'hardy',
    writable: true,
    enumerable: true,    可枚举
    configurable: true
  }
}
```
- 2、for of 用于可迭代数据， 如数组、字符串、Map、Set （迭代器）
```javascript
const arr = [1, 2, 3]
console.log(arr[Symbol.iterator]);

// 浏览器输出，有个next方法， a => next => b => next => c
arr[Symbol.iterator]()
Array Iterator {}
  [[Prototype]]: Array Iterator
  next: ƒ next()
  Symbol(Symbol.toStringTag): "Array Iterator"
  [[Prototype]]: Object
  Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
  [[Prototype]]: Object
```
#### for await of 
- 遍历多个promise
```javascript
const createPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success:' + num)
    }, 500);
  })
}

// usually
(async function () {
  const p1 = createPromise(100)
  const p2 = createPromise(200)
  const p3 = createPromise(300)
  const r1 = await p1
  console.log(r1);
  const r2 = await p2
  console.log(r2);
  const r3 = await p3
  console.log(r3);
})()

// but now
(async function () {
  let list = [createPromise(100), createPromise(200), createPromise(300)]
  for await (let res of list) {
    console.log(res);
  }
})()
```
#### offsetHeight, scrollHeight, clientHeight的区别
- offsetHeight， offsetWidth: border + padding + content
- clientHeight, clientWidth: padding + content
- scrollHeight, scrollWidth: padding + 实际内容尺寸
#### Vue组件通讯的方式
- props和$emit
- $parent
- 自定义事件 (event-emitter)
- $refs
- $attr
- provide/inject
- Vuex













 