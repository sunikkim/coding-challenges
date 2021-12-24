/*
O largest sum of contiguous subarray containing at least one number
I array of nums (pos and neg)
C none
E arr length 1 returns arr[0]

definitely doable in one pass (Kadane's algorithm)
set up max var = arr[0]
set up curr var = arr[0]

iterate through array
for each val
curr += val
curr = Math.max(num, curr)
max = Math.max(max, curr)
return max

O(n) time
O(1) space
*/



const maxSubArray = (nums) => {
  let max = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
      curr += nums[i];
      curr = Math.max(curr, nums[i]);
      max = Math.max(curr, max);
  }

  return max;
};