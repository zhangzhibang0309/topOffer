/**
 *  Time 2022.04.20
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// 这里只整理了快排
// 这种方法理解起来十分有条理，不过力扣上某条数据给卡到了1000+ms
// 边界情况很清晰
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right <= left) return;
  let lineIndex = partition(arr, left, right);
  quickSort(arr, left, lineIndex - 1);
  quickSort(arr, lineIndex + 1, right);
  return arr;
}
// 每一次分区
function partition(arr, left, right) {
  const v = arr[left];
  let i = left,
    j = right + 1;
  while (true) {
    while (arr[++i] < v) if (i >= right) break;
    while (arr[--j] > v) if (j <= left) break;
    if (i >= j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // 四种情况break出来，j都是左子数组的最后一个元素，然后交换
  [arr[left], arr[j]] = [arr[j], arr[left]];
  return j;
}