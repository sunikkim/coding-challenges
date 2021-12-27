/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

O(n ^ 2) time, O(n) space
*/

const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);

  let output = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
        twoSum(nums, i, output);
    }
  }

  return output;
};

const twoSum = (nums, i, output) => {
  let map = {};

  for (let j = i + 1; j < nums.length; j++) {
      let complement = -nums[i] - nums[j];

      if (complement in map) {
          output.push([nums[i], nums[j], complement])

          while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
              j++;
          }
      }

      map[nums[j]] = 1;
  }
};
