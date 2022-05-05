/*
 * @Author: 小方块 
 * @Date: 2022-05-05 22:23:31 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-05 23:22:15
 * 
 * 1级扁平化数组
 */


/**
 * @param arr 
 * @returns 
 * push
 */
export const flatten1 = (arr: any[]): any[] => {
  const res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(_item => res.push(_item))
    } else {
      res.push(item)
    }
  })

  return res
}

/**
 * concat
 */
export const flatten2 = (arr: any[]): any[] => {
  const res: any[] = []
  arr.forEach(item => {
    res.concat(item)
  })
  return res
}












































