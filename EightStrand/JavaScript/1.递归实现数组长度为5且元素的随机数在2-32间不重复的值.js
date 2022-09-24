const arr = [];
let rand = Math.floor(Math.random() * 31) + 2; // 2-32

function dfs(rand) {
  if (arr.length === 5) {
    return;
  }

  if (arr.indexOf(rand) === -1) {
    arr.push(rand);
  }
  dfs(Math.floor(Math.random() * 31) + 2);
}
dfs(rand);
console.log(arr);
