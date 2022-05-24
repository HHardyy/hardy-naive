/*
 * @Author: 小方块 
 * @Date: 2022-05-15 00:14:19 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-05-15 00:34:51
 */
class LruCatch {
  private length: number = 0
  private data: Map<any, any> = new Map()

  constructor(length: number) {
    if (length <= 0) throw new Error('invalid length')
    this.length = length
  }

  set(key: any, value: any) {
    let data = this.data
    if (data.has(key)) delete data[key]
    data.set(key, value)

    if (data.size > this.length) {
      const delKey = data.keys().next().value
      delete data[delKey]
    }
  }

  get(key: any) {
    if (!this.data.has(key)) return null
    const val = this.data.get(key)
    delete this.data[key]
    this.set(key, val)
  }
}