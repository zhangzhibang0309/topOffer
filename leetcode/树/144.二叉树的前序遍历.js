/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * time 2022.02.08
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归 时间复杂度O(n) 空间复杂度O(n)
 var preorderTraversal = function (root) {
    let res = []

    function preorder(node) {
        if (!node) return

        res.push(node?.val)
        preorder(node?.left)
        preorder(node?.right)
    }
    preorder(root)
    return res

};