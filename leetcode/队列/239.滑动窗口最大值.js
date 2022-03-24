/**
 * Time 2022.03.12
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  const len = nums.length;

  const deque = [];
  const res = [];

  for (let i = 0; i < len; i++) {
    // 我们要维护一个递减队列
    // 在入队deque之前，因为要保持递减，所以要删除deque后面小于num[i]的值
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
        // 不断弹出
        deque.pop()
    }

    // 处理好deque后面的元素，使能继续递减，然后入栈deque
    // push之后，仍然是一个递减队列
    deque.push(i)

    // 因为是个滑动窗口，所以要保证目前在deque里面的所有元素都在目前窗口的范围内
    // 因为只有deque[0]才会真正的push进res里面，所以只判断这一个就好
    // i - k是什么呢？比如我们现在i === 4，我们需要元素在[2，4]，i - k = 1，如果<=1了，这个数就不在滑动窗口里面，出队。
    if (deque[0] <= i - k) deque.shift()

    // 写入res数组
    // 要判断现在已经遍历到第一个滑动窗口的最右端，就是一开始i是0或者1的时候，还没遍历完一个滑动窗口，所以不能入res
    if (i >= k - 1) res.push(nums[deque[0]])
}

  return res;
};
