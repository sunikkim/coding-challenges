/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

O length of longest substring containing same letter after performing k operations
I string, integer k
C none
E none

general idea: identifying gaps in continuous sequences
task: find gap of size <= k in longest continuous substring of same character

iterate through string
keep track of char with most instances (map, count instances)
k = longest "step/bridge" i can make between "islands" of same chars
at each step, either extend or slide the window to the right
return size of window
*/

const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  let map = {};

  while (right < s.length) {
      const char = s[right];
      map[char] = map[char] ? map[char] + 1 : 1;

      if (map[char] > maxCharCount) {
          maxCharCount = map[char];
      }

      if (right - left + 1 - maxCharCount > k) {
          map[s[left]]--;
          left++;
      }

      right++;
  }

  return right - left;
};