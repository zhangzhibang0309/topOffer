/**
 * Time 05.09
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 边缘情况
  if (board.length === 0) return false;
  if (word.length === 0) return true;

  // 开始循环
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个字母，都可以作为起点
      const ret = dfs(i, j, 0); // 0是当前查询字母的索引
      if (ret) return ret;
    }
  }

  return false;

  function dfs(i, j, cur) {
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;

    let letter = board[i][j];

    if (letter !== word[cur]) return false;
    if (cur === word.length - 1) return true;

    board[i][j] = null; // 选择当前字母
    // 下一步
    const ret =
      dfs(i + 1, j, cur + 1) ||
      dfs(i - 1, j, cur + 1) ||
      dfs(i, j + 1, cur + 1) ||
      dfs(i, j - 1, cur + 1);

    board[i][j] = letter; //回溯

    return ret;
  }
};
