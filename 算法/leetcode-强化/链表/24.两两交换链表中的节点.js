/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * time 2022.01.31
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var swapPairs = function (head) {
  let virtualHead = new ListNode(0, head),
    pre = virtualHead;

  while (pre?.next?.next) {
    // 定义双指针
    let left = pre.next;
    let right = pre?.next?.next;

    // 交换两个节点 并给pre为下一次赋值
    left.next = right.next;
    right.next = left;
    pre.next = right;
    pre = left;
  }

  return virtualHead.next;
};
