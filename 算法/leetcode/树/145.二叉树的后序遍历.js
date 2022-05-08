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
var postorderTraversal = function (root) {
  const res = [];

  function postorder(node) {
    if (!node) return;

    postorder(node.left);
    postorder(node.right);
    res.push(node.val);
  }

  postorder(root);

  return res;
};
