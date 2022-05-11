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

// 分发饼干
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  // 饼干满足胃口尽可能大的
  let ret = 0;
  let index = 0; // 饼干索引
  for (let i = 0; i < g.length; i++) {
    if (index < s.length && s[index] >= g[i]) {
      ret++;
      index++;
    }
  }

  return ret;
};
