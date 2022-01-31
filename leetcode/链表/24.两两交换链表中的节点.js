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
var swapPairs = function (head) {
    let virtualHead = new ListNode()
    virtualHead.next = head
    let pre = virtualHead
    let left = head ?? null
    let right = head?.next ?? null

    while (right) {
        left.next = right.next
        right.next = left
        pre.next = right

        let temp = left
        left = right
        right = temp

        left = left?.next?.next ?? null
        right = right?.next?.next ?? null
        pre = pre?.next?.next

    }

    return virtualHead.next
};