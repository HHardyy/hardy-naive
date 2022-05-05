/*
 * @Author: 小方块 
 * @Date: 2022-05-05 23:21:42 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-05 23:34:42
 * 
 * 深层数组扁平化
 */
export const flattenDeep1 = (arr: any[]): any[] => {
  const res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flattenDeep1(item).forEach(_item => {
        res.push(_item)
      })
    } else res.push(item)
  })
  return res
}

export const flattenDeep2 = (arr: any[]): any => {
  let res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flattenDeep2(item))
    } else {
      res = res.concat(item)
    }
  })
  return arr
}