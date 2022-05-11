// 一道贪心 真O(n)
// 这道题可能打眼一看像是dp，但其实就是个贪心，要对cover做贪心，就很简单了。
var canJump = function (nums) {
  let cover = 0;

  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) return true;
  }

  return false;
};
