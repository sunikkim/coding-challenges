/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

O array of nums
I array of all possible subsets
C no duplicate subsets
E none

backtracking solution
initialize recursive backtracking function
iterate through nums, calling backtrack on each num and saving every individual path, pushing each path to the output array. index (start point of loop) advances by 1 for each iteration
call backtrack with empty array and starting index of 0 to get all possible subsets (power set)
*/

const subsets = (nums) => {
  let output = [];

  const backtrack = (path, index) => {
      output.push(path);

      for (let i = index; i < nums.length; i++) {
          backtrack([...path, nums[i]], i + 1);
      }
  };

  backtrack([], 0);

  return output;
};