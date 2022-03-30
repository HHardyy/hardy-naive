/*
 * @Author: 小方块 
 * @Date: 2022-03-30 23:42:28 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-03-31 00:16:48
 */
const { bst } = require('./bst')

const arr1 = [], arr2 = [], arr3 = []

/**
 * 前序遍历
 * @param {*} bst 
 * @returns 
 */
const preOrderTravers = (bst) => {
  if (!bst) return null
  arr1.push(bst.value)
  preOrderTravers(bst.left)
  preOrderTravers(bst.right)
}

/**
 * 中序遍历
 * @param {*} bst 
 * @returns 
 */
const inOrderTravers = (bst) => {
  if (!bst) return null
  inOrderTravers(bst.left)
  arr2.push(bst.value)
  inOrderTravers(bst.right)
}

/**
 * 后序遍历
 * @param {*} bst 
 * @returns 
 */
const postOrderTravers = (bst) => {
  if (!bst) return null
  postOrderTravers(bst.left)
  postOrderTravers(bst.right)
  arr3.push(bst.value)
}

/**
 * 查找二叉树中的第k小值
 * auther hardy
 * @param {*} bst 一颗树 
 * @param {*} k  值
 */
exports.getKValue1 = getKValue1 = function (bst, k = 1) {
  preOrderTravers(bst)
  return arr1[k - 1] || null
}
exports.getKValue2 = getKValue2 = function (bst, k = 1) {
  inOrderTravers(bst)
  return arr2[k - 1] || null
}
exports.getKValue3 = getKValue3 = function (bst, k = 1) {
  postOrderTravers(bst)
  return arr3[k - 1] || null
}