/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

---

O number of islands in grid
I grid of land and water
C none
E none

find "edges" of island and going from there...so wherever there is a 1 with an adjacent 0 (or out of bound)

basic idea: islands are contiguous "areas" of adjacent 1s. make recursive search helper function. keep track of visited locations with hash table and iterate through grid. if grid value is 1, increment counter by 1 and search in every direction from the value.

make counter = 0
make dfs function (that searches in every direction from a given node)
iterate through grid
if grid[i][j] = 1
counter++
dfs on that node, mark every visited node '0'
return counter

M = # of rows
N = # of columns

O(M x N) time complexity
O(min(M, N)) space complexity

*/

const numIslands = (grid) => {
  let count = 0;
  const maxHeight = grid.length;
  const maxWidth = grid[0].length;
  const memo = {};

  const search = (grid, i, j, memo) => {
      if (i < 0 || i >= maxHeight || j < 0 || j >= maxWidth || grid[i][j] === '0' || `${i}?${j}` in memo) {
          return;
      }

      memo[`${i}?${j}`] = true;

      search(grid, i + 1, j, memo);
      search(grid, i - 1, j, memo);
      search(grid, i, j + 1, memo);
      search(grid, i, j - 1, memo);
  };

  for (let i = 0; i < maxHeight; i++) {
      for (let j = 0; j < maxWidth; j++) {
          if (grid[i][j] === '1' && !memo[`${i}?${j}`]) {
              count++;
              search(grid, i, j, memo);
          }
      }
  }

  return count;
};