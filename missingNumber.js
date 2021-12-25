/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

O - only number in range missing from array
I - array of nums range 0 - n
C - try O(1) space and O(n) time complexity
E - none

sort array
iterate through array
if diff between two items > 1, return prev item + 1

O(1) space, O(2n) = O(n) time

*/

const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);

  if (nums[0] !== 0) {
      return 0;
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] !== undefined && nums[i + 1] - nums[i] > 1) {
          return nums[i] + 1;
      }
  }

  return nums[nums.length - 1] + 1;
};
