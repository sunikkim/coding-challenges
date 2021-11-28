/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

O - given array rotated to the right by k steps
I - array of non-negative integers
C - array must be rotated in place
E - none

use extra space (another array) to copy over values from original array in their new rotated order (using modulo operator to handle if new index is greater than array length)

then just iterate over original array and copy over values at each index from the new array

O(2N) = O(N) time
O(N) space

*/

const rotate = (nums, k) => {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
      output[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
      nums[i] = output[i];
  }
};