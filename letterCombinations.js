/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

const letterCombinations = (digits) => {
  let output = [];

  if (!digits) {
      return [];
  }

  const recurse = (str, index) => {
      if (str.length === digits.length) {
          output.push(str);
          return;
      }

      const char = digits[index];
      const chars = map[char];

      for (let i = 0; i < chars.length; i++) {
          recurse(str + chars[i], index + 1);
      }
  };

  recurse('', 0);

  return output;
};