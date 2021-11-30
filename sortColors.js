/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

O original array sorted with all elements of same type next to one another
I array of nums 0-2
C cannot use sort function, must sort array in place
E if array length === 1, return array

solution w/ extra space (O(2n) = O(n)):

initialize hash map
initialize second array
iterate through original array
count # of instances of each element

[2,0,2,1,1,0]
 0 1 2 3 4 5

{
0: 2
1: 2
2: 2
}

iterate through hash map, pushing each key (0, 1 or 2) to second array and decrementing value at key by 1 for each push until value is 0

iterate through original array, replacing each value with value from same index in second array
*/

// optimal solution: constant space, O(n) time using swap helper function. Dijkstra's Dutch National Flag problem
const sortColors = (nums) => {
  const swap = (a, b) => {
      [nums[b], nums[a]] = [nums[a], nums[b]];
  };

  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
      if (nums[mid] === 0) {
          swap(low, mid);
          mid++;
          low++;
      } else if (nums[mid] === 1) {
          mid++;
      } else if (nums[mid] === 2) {
          swap(mid, high);
          high--;
      }
  }

  return nums;
};

// working but less optimal solution: extra space, multiple iterations
const sortColors = (nums) => {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    let arr = [];

    for (let num in map) {
        while (map[num]) {
            arr.push(Number(num));
            map[num]--;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }

    return nums;
};