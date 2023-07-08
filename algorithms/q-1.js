/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if ((num < 0 && num >= target) || (num => 0 && num <= target)) {
      const numo = target - num;
      const numoIndex = nums.findIndex((f) => f === numo);
      if (numoIndex > -1 && numoIndex !== index) {
        return [index, numoIndex];
      }
    }
  }
  return [0];
};
const nums = [0,4,3,0];
const target = 0;
console.log(twoSum(nums, target));
