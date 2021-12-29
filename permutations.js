/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

O all possible permutations of input array
I array of distinct integers
C none
E none
*/

const permute = (nums) => {
  if (nums.length < 2) {
      return [nums];
  }

  let output = [];

  for (let i = 0; i < nums.length; i++) {
      let remainingArray = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];

      for (let combo of permute(remainingArray)) {
          output.push([nums[i], ...combo]);
      }
  }

  return output;
};
