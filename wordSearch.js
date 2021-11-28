/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

O boolean if word exists in grid
I m x n grid of characters and target string
C word can be constructed from letters of seqeuentially adjacent cells. same letter cell may not be used more than once
E none

m = board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

basic idea: backtracking (placing a piece, keeping track of visited squares, searching all possible options, replacing piece). like n-queens.

brute force implementation steps (times out with large datasets):
iterate through board and find instance of first char of word
those are your starting points
then, from those starting points
check in all four directions (up down left right) if any chars = next char of word
check for boundaries, etc
if the next char is present, continue the process

L = target word length

O(N ^ (3 ^ L)) time complexity
O(L) space complexity

*/

const exist = (board, word) => {
  const maxWidth = board[0].length - 1;
  const maxHeight = board.length - 1;

  const recurse = function(i, j, index) {
      if (word.length === index) {
          return true;
      }

      if (i > maxHeight || i < 0 || board[i][j] !== word[index]) {
          return false;
      }

      board[i][j] = '#';

      if (recurse(i - 1, j, index + 1) || recurse(i + 1, j, index + 1) || recurse(i, j - 1, index + 1) || recurse(i, j + 1, index + 1)) {
          return true;
      }

      board[i][j] = word[index];
  };

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === word[0] && recurse(i, j, 0)) {
              return true;
          }
      }
  }

  return false;
};