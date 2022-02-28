/**
 * Time 2022.02.28
 * 标签：链表√ 双指针√ 哈希表？
 * 
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

// 这个就是双指针，这个题的核心是搞明白一个公式，首先要明白fast和slow一定会相遇一次，设进入环之前走的距离是x，从起点到相遇点是y，从相遇点继续走到起点是z。
// 公式 fast走的：x+y+z+y = slow走的：2 * (x + y) => z = x。
// 由此，我们先找到相遇点，然后让fast回到head，二者再次相遇点便是起点。
 var detectCycle = function (head) {
  if(head === null || head?.next === null) return null    

  let fast = head
  let slow = head

  while(fast && slow) {
      fast = fast?.next?.next
      slow = slow?.next

      if(fast === slow) {
          fast = head
          while(fast !== slow) {
              fast = fast.next
              slow = slow.next
          } 
          return fast
      }
  }

  return null
}

