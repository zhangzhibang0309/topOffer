// 这章只讲思想
// DFS
// 先写个二叉树前序遍历递归版
const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
  };
function preorder(root) {
    if(!root) return

    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}
preorder(root)

// 为什么先上来写了个二叉树前序遍历呢？这和DFS有什么关系呢？
// 关系大得很，二叉树的前中后序遍历，其实就是DFS
// DFS的概念很好理解，就是一条路走到黑在往后退去看另一条路
// 递归本身就是DFS，与栈关系很大，底层就是栈实现的
// 所以一般DFS就是用递归去实现
// DFS和回溯关系十分密切，可以说回溯用的就是DFS思想

// BFS
// 先简单写个BFS二叉树层序遍历
function BFS(root) {
    const queue = []
    queue.push(root)

    // queue里面还有东西，说明没有遍历完
    while(queue.length) {
        let top = queue[0]
        console.log(top.val)

        if(top.left) queue.push(top.left)
        if(top.right) queue.push(top.right)

        queue.shift()
    }
}
BFS(root)
// 有了DFS的经验，这里就好理解多了
// 二叉树层序遍历，就是BFS
// 简单来说就是一层一层的扫描，一般就是迭代实现
// 和队列关系比较大
// 就是遍历思想罢了，在写代码的时候，遇到BFS网队列上靠一下
