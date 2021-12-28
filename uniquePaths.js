/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

O number of unique paths
I grid of size m x n
C none
E none

recursion + memoization

make count = 0
move right = n + 1
move down = m + 1

base case: if m === 0 || n === 0
count++
return

failing base case: if m < 0 || n < 0
return

branch1: uniquePaths(m - 1, n)
branch2: uniquePaths(m, n - 1)

return branch1 + branch2
*/

const uniquePaths = (m, n, memo={}) => {
    if (`${m}?${n}` in memo) {
        return memo[`${m}?${n}`];
    }

    if (m === 1 && n === 1) {
        return 1;
    }

    if (m === 0 || n === 0) {
        return 0;
    }

    memo[`${m - 1}?${n}`] = uniquePaths(m - 1, n, memo);
    memo[`${m}?${n - 1}`] = uniquePaths(m, n - 1, memo);

    return memo[`${m - 1}?${n}`] + memo[`${m}?${n - 1}`];
};