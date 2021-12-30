/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

O minimum number of jumps to reach the end index (always possible)
I array of non-negative integers
C none
E empty array returns 0? or 1?
*/

const jump = (nums) => {
  let jumps = 0;
  let currentJumpEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);

      if (i === currentJumpEnd) {
          jumps++;
          currentJumpEnd = farthest;
      }
  }

  return jumps;
};