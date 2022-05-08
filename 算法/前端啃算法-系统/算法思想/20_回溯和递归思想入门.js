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