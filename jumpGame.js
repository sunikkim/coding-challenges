/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

O boolean if last index is reachable
I array of nums
C none
E none

greedy approach: - determine best option (furthest step?) at each step

initialize counter (largest step so far?)

iterate over array
for each num, check
if num + index >= array.length - 1 ===> target reached, return true
else if max <= i and num is 0 ===> return false

recursive/backtracking approach:

make inner "canJump" function that checks every combination of jumps from every position, marks each position as "good" or "bad" depending on whether it offers a path forward or not

brute force solution that is optimized via memoization
*/

// memoized backtracking
const canJump = (nums) => {
  const target = nums.length - 1;

  const canJumpFromPosition = (nums, position, memo={}) => {
      if (memo[position] !== undefined && memo[position] !== null) {
          return memo[position] === true ? true : false;
      }

      if (position === target) {
          return true;
      }

      let maxJump = Math.min(nums[position] + position, target);

      for (let nextPosition = position + 1; nextPosition <= maxJump; nextPosition++) {
          if (canJumpFromPosition(nums, nextPosition, memo)) {
              memo[position] = true;
              return true;
          }
      }

      memo[position] = false;
      return false;
  };

  return canJumpFromPosition(nums, 0);
};

// greedy
const canJump = (nums) => {
    let max = 0;
    let i = 0;
    let target = nums.length - 1;

    while (i < nums.length) {
        max = Math.max(max, nums[i] + i);

        if (max >= target) {
            return true;
        }

        if (max <= i && nums[i] === 0) {
            return false;
        }

        i++;
    }
};
