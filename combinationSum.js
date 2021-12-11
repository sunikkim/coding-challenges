/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

O- array of ways to add up candidates to target
I- array of nums, target num
C- none
E- no match returns empty array

recursive w memoization

make output array
iterate through array
recurse on each element
return output

base case: target = 0 returns []
*/

const combinationSum = (candidates, target) => {
  if (!candidates.length) {
      return [];
  }

  if (target === 0) {
      return [[]];
  }

  candidates.sort((a, b) => a - b);

  let paths = [];

  const recurse = (target, path, i) => {
      if (target === 0) {
          paths.push(path);
          return;
      } else if (target < 0) {
          return;
      } else {

        while (i < candidates.length && target - candidates[i] >= 0) {
          recurse(target - candidates[i], [...path, candidates[i]], i);
          i++;
        }
      }
  };

  recurse(target, [], 0);

  return paths;
};