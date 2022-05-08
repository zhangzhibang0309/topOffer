/**
 * @param {number[]} height
 * @return {number}
 */
// 普通双指针做法 时间复杂度n²
// 思路很简单，遍历每一个柱子，然后往左找最高，往右找最高，找出二者之间较小的-柱子自身高度
// 其实左边或者右边的大小最小设成height[i]的搞读就好，因为如果左右没有比height[i]更高的柱子的话取值本身，算出来接雨水还是0
var trap = function (height) {
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) continue;

    let heightLI = i - 1;
    let heightL = height[i];
    for (let j = heightLI; j >= 0; j--) {
      heightL = Math.max(heightL, height[j]);
    }
    let heightRI = height[i];
    let heightR = height[i];
    for (let j = heightRI; j < height.length; j++) {
      heightR = Math.max(heightR, height[j]);
    }

    let temp = Math.min(heightL, heightR) - height[i];
    res += temp;
  }

  return res;
};

// dp 时间复杂度n
// 刚才的双指针明显可以感觉到在重复计算左右柱子，那么我们可以简化这些计算，将每个柱子对应的左右最高分别放到一个数组
// 状态转移方程
// maxLeft[i] = max(height[i],maxLeft[i-1])
// maxRight[i] = max(height[i],maxRight[i+1])
var trap = function (height) {
  let res = 0;
  let maxLeft = new Array(height.length).fill(0);
  maxLeft[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }

  let maxRight = new Array(height.length).fill(0);
  maxRight[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) continue;
    let temp = Math.min(maxLeft[i], maxRight[i]) - height[i];
    res += temp;
  }

  return res;
};
