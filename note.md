<!-- 算法复杂度 -->

### 什么是复杂度
- 程序执行时需要的计算量和内存空间（和代码是否简洁无关）
- 复杂度是数量级， 不是具体数字

### 时间复杂度
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
### 空间复杂度
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
### 几道算法题
- 1、讲一个数组旋转k步 (rotate.ts)
- 2、用js实现快速排序， 并说明时间复杂度
- 3、判断字符串是否括号匹配
```bash
1)、一个字符串s可能包含{ } ()[]三种括号
2)、判断s是否是括号匹配的
3)、如(a{b}c)匹配， 而{a(b或{a(b}c)就不匹配
```
- 4、反转单向链表


