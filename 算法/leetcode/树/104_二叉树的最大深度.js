/**
 * Time 2022.04.19
 * 
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function (root) {
  // 树最大深度 等于左子树的深度和右子树的深度，最大的那一个

  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};