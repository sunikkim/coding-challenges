/*
Given a string s, find the length of the longest substring without repeating characters.

O length of longest substring without repeating characters
I string
C none
E empty string returns 0

sliding window problem

initialize hash map
initialize longest counter = 0
use two pointers i and j (i === j to start)
slide right pointer j to the right, adding each char to map
if char is already in map
you've found longest substring from given index i
set longest = right - left + 1 (or current longest)
so now slide i 1 position to the right
continue for all i (every index of string)

O(2n) = O(n) time complexity
O(min(m, n)) space complexity

*/

const lengthOfLongestSubstring = (s) => {
  let map = {}

  let left = 0;
  let right = 0;

  let result = 0;

  while (right < s.length) {
      let r = s[right];
      let index = map[r];

      if (index !== null && index >= left && index < right) {
          left = index + 1;
      }

      result = Math.max(result, right - left + 1);
      map[r] = right;
      right++;
  }

  return result;
};