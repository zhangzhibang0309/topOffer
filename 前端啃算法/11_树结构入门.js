
var maxDepth = function (root) {
  // 树最大深度 等于左子树的深度和右子树的深度，最大的那一个

  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


 var invertTree = function(root) {
  if(root === null) {
    return root
  }

  [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
  return root
};