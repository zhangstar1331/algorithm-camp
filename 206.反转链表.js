/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
  // 骚气一些
  let [cur, prev] = [head, null]
  while(cur!=null){
    // 中间存储
    [cur.next, prev,cur] = [prev,cur,cur.next]
  }
  return prev
}
var reverseList1 = function (head) {

  let cur  = head
  let prev = null

  while(cur!=null) {
    next =cur.next
    cur.next = prev
    prev = cur
    cur = next

  }

  return prev

};
// @lc code=end

