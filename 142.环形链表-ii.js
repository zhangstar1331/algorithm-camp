/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle1 = function(head) {
      // 哈希表存储。思路简单
  let cache = new Set()
  while(head){
    if(cache.has(head)){
      return head
    }else{
      cache.add(head)
    }
    head = head.next
  }
  return null
};
https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
var detectCycle = function(head) {
  // 阶段1 快慢至真
  let start = head
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      // 阶段2
      while(slow&& start){
        if(slow==start){
          return slow
        }
        slow = slow.next
        start = start.next

      }

    }
  }
    return null
  // 阶段2


};


// @lc code=end

