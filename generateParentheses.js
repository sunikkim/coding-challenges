/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

O - array of strings of valid combos of n pairs of parantheses
I - n pairs of parentheses
C - none
E - n = 0 return empty array

initiate output array
make dfs inner function that keeps track of # of open and closed parens (well-formed parens have equal numbers of open and closed parens)
when both open and closed === 0, push result to output array
decrement open / closed by 1 for each recursive call
return output array

*/

const generateParenthesis = (n) => {
  let output = [];

  const dfs = (str, open, closed) => {
      if (open > closed) {
          return;
      }

      if (open === 0 && closed === 0) {
          output.push(str);
          return;
      }

      if (open > 0) {
          dfs(str + '(', open - 1, closed);
      }

      if (closed > 0) {
          dfs(str + ')', open, closed - 1);
      }
  };

  dfs('', n, n);

  return output;
};