/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 递归骚操作
var removeElements = function (head, val) {
  if (head === null) return head;

  head.next = removeElements(head.next, val);
  return head.next.val === val ? head.next : head;
};
// 正常写法 遍历
var removeElements = function (head, val) {
  let ele = {
    next: head,
  };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return ele.next;
};
