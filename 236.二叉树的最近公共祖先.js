/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 1. p的路径，q的路径，前面重复的 逻辑简单
    // 递归 findporq  只利用二叉树的特性
    // 如果左子树没找到p或者q，就去右边找
    // 右边没找到，就去左边找
    // 两遍都找到了，root就是LCA
    if(root==null || root==p || root==q){
        return root
    }
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // if(left==null){
    //     return right
    // }
    // if(right==null){
    //     return left
    // }
    // return root
    // 上面两个if 也可以换成一个三元表达式
    return left==null?right: right==null?left:root

};
// @lc code=end

