/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * time 2022.02.01
 *
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
// 时间复杂度 大概是O(n)
var hasCycle = function (head) {
  if (head == null || head?.next === null) return false;

  let low = head;
  let fast = head;

  while (low && fast) {
    low = low?.next;
    fast = fast?.next?.next;

    if (low === fast) return true;
  }

  return false;
};
