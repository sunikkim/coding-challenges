/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

O 2d array of anagrams grouped together
I array of strs
C none
E empty str returns 2d array w empty str

initialize hash map
iterate through strs
add each str to map as key, but sort each str first
if str NOT in map
map[str] = []
else if str IN map
map[str].push(str)

initialize output array
iterate through map
push each array (value at each key) to output array

return output array
*/

const groupAnagrams = (strs) => {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
      const sortedStr = strs[i].split('').sort().join('');

      if (!map[sortedStr]) {
          map[sortedStr] = [strs[i]];
      } else {
          map[sortedStr].push(strs[i]);
      }
  }

  let output = [];

  for (anagram in map) {
      output.push(map[anagram]);
  }

  return output;
};