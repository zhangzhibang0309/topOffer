/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time 2022.03.15
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function (head) {
    const vHead = new ListNode(0, head)
    let cur = vHead

    while (cur.next) {
        if (cur.next.val === cur.next.next?.val) {
            let temp = cur
            cur = cur.next
            while (cur?.val === cur.next?.val) {
                cur = cur.next
            }
            temp.next = cur.next
            cur = temp
        } else {
            cur = cur.next
        }
    }

    return vHead.next
};