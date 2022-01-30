/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * time 2022.01.30
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {

    const newHead = new ListNode()
    newNode = newHead
    let falg = 0


    while ((l1 ?? false) || (l2 ?? false) || falg === 1) {
        const num = (l1?.val ?? false ? l1.val : 0) + (l2?.val ?? false ? l2.val : 0) + falg
        newNode.val = num % 10

        if (parseInt(num / 10) !== 0) {
            falg = 1
            newNode.next = new ListNode(0, null)
            newNode = newNode.next
        }
        else {
            falg = 0
            if ((l1?.next ?? false) || (l2?.next ?? false)) {
                newNode.next = new ListNode(0, null)
                newNode = newNode.next
            }

        }

        l1 = l1?.next
        l2 = l2?.next

    }

    return newHead
};