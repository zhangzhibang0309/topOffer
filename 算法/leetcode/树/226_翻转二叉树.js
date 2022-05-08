/**
 *  Time 2022.04.19
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  if(root === null) {
    return root
  }

  [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
  return root
};