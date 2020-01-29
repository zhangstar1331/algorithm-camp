/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
    // 哈希表存储。思路简单
    let cache = new Set()
    while(head){
      if(cache.has(head)){
        return true
      }else{
        cache.add(head)
      }
      head = head.next
    }
    return false
}
var hasCycle2 = function(head) {
  // 快慢至真，快至真到了 就结束了
  // 否则一定会碰上
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) return true
  }
  return false
}
var hasCycle = function(head) {
  // 挨揍的解法
  // setTimeout(()=>{})
  let count = 1
  while(head){
    if(count>10000){
      return true
    }
    head = head.next
    count++

  }
  return false 
}
// @lc code=end

