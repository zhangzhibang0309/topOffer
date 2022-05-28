# 前端章节

150题左右

## 数据结构层面

1. 链表

```js
// 遍历
while (head) {
    head = head.next
}
return head

// 虚拟头节点
let dummy = {
    next: head
}
```

2. 数组

```js
for (let i = 0; i < arr.length; i++) {
    arr[i]
}
```

3. 树 前端最需要刷的数据结构

```js
function walk(treeNode) {

    // 前序
    处理treeNode
    walk(treeNode.left)
    walk(treeNode.right)

    // 中序
    walk(treeNode.left)
    处理treeNode
    walk(treeNode.right)

    // 后序
    walk(treeNode.left)
    walk(treeNode.right)
    处理treeNode
}
```

## 算法层面

1. 二分
2. 双指针（快慢指针，头尾指针）
  1. 链表、数组
3. 递归和回溯（画递归树）
4. 动态规划
5. 贪心
6. bfs(宽度优先) dfs（回溯，深度优先）

## 题型

1. 盛水
2. 炒股
3. 打劫
# 扩展
1. 图
2. 哈希表
3. 。。。
