/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

O minimum sum by traversing grid
I array of arrays representing a grid
C you can only move right or down
E none

variation of uniquePaths problem. instead of counting # of unique paths, we have a count/sum for each unique path that makes its final return when we reach the end of a path. keep track of the shortest path as each path reaches its end. return shortest path.

recursive w/ memoization (or DP?)

start: [0][0] top left ALWAYS
end: [grid.length - 1][grid[0].length - 1] ALWAYS

move right: [][+1]
move down: [+1][]

boundaries: if i > grid.length - 1 or j > grid[0].length - 1

success base case: i === grid.length - 1 && j === grid[0].length - 1
shortest = Math.min(currCount, shortest)

failing base case: i > grid.length - 1 || j > grid[0].length - 1
return
*/

// works, but times out with enormous datasets. O(2 ^ (M + N)) time complexity, O(M + N) space complexity
const minPathSum = (grid) => {
    let maxHeight = grid.length - 1;
    let maxWidth = grid[0].length - 1;

    let shortest = 1000000000;

    const traverse = (i, j, count=0) => {
        if (i === maxHeight && j === maxWidth) {
            count += grid[i][j];

            shortest = Math.min(shortest, count);

            count = 0;
        }

        count += grid[i][j];

        if (i + 1 <= maxHeight) {
            traverse(i + 1, j, count);
        }

        if (j + 1 <= maxWidth) {
            traverse(i, j + 1, count);
        }
    };

    traverse(0, 0);

    return shortest;
};

// DP version, more efficient O(M x N) time and space complexity
const minPathSum = (grid) => {
  const dp = Array(grid.length).fill().map(() => Array(grid[0].length).fill(0));

  for (let i = grid.length - 1; i >= 0; i--) {
      for (let j = grid[0].length - 1; j >= 0; j--) {
          if (i === grid.length - 1 && j !== grid[0].length - 1) {
              dp[i][j] = grid[i][j] + dp[i][j + 1];
          } else if (j === grid[0].length - 1 && i !== grid.length - 1) {
              dp[i][j] = grid[i][j] + dp[i + 1][j];
          } else if (i !== grid.length - 1 && j !== grid[0].length - 1) {
              dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]);
          } else {
              dp[i][j] = grid[i][j];
          }
      }
  }

  return dp[0][0];
};