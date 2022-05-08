/**
 * Time 2022.03.15
 * 反转链表Ⅱ
 * 多指针 然后处理一些复杂操作细节
 * 这题主要难在一些边界条件
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let pre, cur, next, leftHead, start;

  const dummy = new ListNode(0, head);

  let p = dummy;
  for (let i = 0; i < left - 1; i++) {
    p = p.next;
  }

  leftHead = p;
  start = p.next;

  pre = start;
  cur = pre.next;
  next = cur?.next;

  for (let i = left; i < right; i++) {
    cur.next = pre;
    pre = cur;
    cur = next;
    next = next?.next;
  }

  start.next = cur;
  leftHead.next = pre;

  return dummy.next;
};
