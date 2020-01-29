/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree1 = function(root) {
  // 递归
    if(root==null){
      return root
    }

    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root
};
var invertTree = function(root) {
  // 迭代，前中后序不强求
  if(root==null){
    return root
  }
  const stack = [root];
  let current = null;
  while ((current = stack.shift())) {
    const left = current.left;
    const right = current.right;
    current.right = left;
    current.left = right;
    if (left) {
      stack.push(left);
    }
    if (right) {
      stack.push(right);
    }
  }
  return root
};
// @lc code=end

