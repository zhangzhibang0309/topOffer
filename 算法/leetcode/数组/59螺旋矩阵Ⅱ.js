/**
 * Time 2022.03.01
 * 标签：数组 模拟 矩阵
 * 
 * @param {number} n
 * @return {number[][]}
 */

// 此题不涉及任何算法 时间O(n²) 空间O(n²)
 var generateMatrix = function (n) {
  const count = n ** 2;

  const arr = new Array();

  for (let i = 0; i < n; i++) {
      arr.push(new Array(n).fill(0));
  }

  let x = 0;
  let y = 0;

  let flag = 1;
  for (let i = 1; i <= count; i++) {
      arr[x][y] = i;

      if (flag % 4 === 1) {
          y++;
          if (y >= n || arr[x][y] >= 1) {
              y--;
              x++;
              flag++;
          }
      } else if (flag % 4 === 2) {
          x++;
          if (x >= n || arr[x][y] >= 1) {
              x--;
              y--;
              flag++;
          }
      } else if (flag % 4 === 3) {
          y--;
          if (y < 0 || arr[x][y] >= 1) {
              y++;
              x--;
              flag++;
          }
      } else {
          x--;
          if (x < 0 || arr[x][y] >= 1) {
              x++;
              y++;
              flag++;
          }
      }
  }

  return arr
};