/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * time 2022.01.27
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 常规做法 遍历拿到两个链表的长度差 让长链表先走一个差值 实现二者对齐
// 时间复杂度：O(n + m) 空间复杂度：O(1)
var getIntersectionNode = function (headA, headB) {
  let indexA = headA;
  let indexB = headB;
  let lenA = 0;
  let lenB = 0;

  while (indexA) {
    indexA = indexA.next;
    lenA++;
  }
  while (indexB) {
    indexB = indexB.next;
    lenB++;
  }
  indexA = headA;
  indexB = headB;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      indexA = indexA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      indexB = indexB.next;
    }
  }

  while (indexA !== indexB) {
    indexA = indexA.next;
    indexB = indexB.next;
  }

  return indexA;
};

// 你走过我 来时的路
// 双指针同时向前走 当一个走到头之后 去指向另一条链表的头
// 这样当长链表指向短链表head的时候 之前短链表的指针已经在长链表的指针走完了一个长度差值
// 所以时间复杂度O(m + n) 也就是O(n) 空间O(1)
var getIntersectionNode = function (headA, headB) {
  let p = headA;
  let q = headB;

  // 判断边界
  if (headA === null || headB === null) return null;

  // 对齐两个指针 最终会同时走向null 或者第一个相交节点
  while (p !== q) {
    p = p === null ? headB : p.next;
    q = q === null ? headA : q.next;
  }
  return p;
};

// 这个跟上面差不多 但是不换头 这样做的原理其实是在走一个节点的最小公倍数
// 这个时间复杂度就高了 就是个最小公倍数 当二者最小公倍数是m * n 的时候 复杂度就是O（m * n）
var getIntersectionNode = function (headA, headB) {
  let p = headA;
  let q = headB;

  if (headA === null || headB === null) return null;

  while (p !== q) {
    p = p === null ? headA : p.next;
    q = q === null ? headB : q.next;
  }

  return p;
};
