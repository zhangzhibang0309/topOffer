// 迭代法实现二叉树的先、中、后序遍历
/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];

  if (!root) {
    return res;
  }
  const stack = [];
  stack.push(root);

  while (stack.length) {
    let cur = stack.pop();
    res.push(cur?.val);

    if (cur?.right) {
      stack.push(cur.right);
    }
    if (cur?.left) {
      stack.push(cur.left);
    }
  }

  return res;
};

/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  if (!root) return res;

  const stack = [];
  stack.push(root);

  while (stack.length) {
    const cur = stack.pop();
    res.unshift(cur.val);

    if (cur?.left) {
      stack.push(cur?.left);
    }

    if (cur?.right) {
      stack.push(cur?.right);
    }
  }

  return res;
};

/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function (root) {
    const res = []
    if (!root) return res

    const stack = []

    let cur = root

    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }

        cur =  stack.pop()
        res.push(cur.val)
        cur = cur.right
    }

    return res
};