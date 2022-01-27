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
// 双指针 先让二者对其 再去找第一个交点
// 若无相交 则二者同为null返回 因为二者总是趋于对齐
 var getIntersectionNode = function (headA, headB) {
    let p = headA
    let q = headB

    if (headA === null || headB === null) return null

    while (p !== q) {
        p = p === null ? headA : p.next
        q = q === null ? headB : q.next
    }

    return p
};