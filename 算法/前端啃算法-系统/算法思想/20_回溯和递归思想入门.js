// 全排列
// 123三个数字，打印全部排列cd
function backTrack(list, tmp, nums) {
  if(tmp.length === nums.length) return list.push([...tmp])
  for(let i = 0; i < nums.length;i++) {
    if(tmp.includes(nums[i])) {
      continue
    }
    tmp.push(nums[i])
    backTrack(list,tmp,nums)
    tmp.pop()
  }
}
var permute = function (nums) {
  let list = []
  backTrack(list, [], nums)

  return list
};

// 做完这道题，大概能给出一个公式
// 对于这种需要全部结果的题目
// let list = []
// function dfs(list,临时路径,输入) {
  
//   结束条件{
//     list.新增一个路径
//   }

//   循环{
//     选择一个数据
//     递归 dfs(list,临时路径,输入)
//     撤回选择的数据
//   }
// }
// dfs(list,临时路径,输入)