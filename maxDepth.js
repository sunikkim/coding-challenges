/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

O max depth of tree
I binary tree
C none
E none

O(n) time
O(logn) space
*/

const maxDepth = (root) => {
  let max = 0;

  const dfs = (node, count=0) => {
      if (!node) {
         return;
      }

      count++;

      if (count > max) {
          max = count;
      }

      if (node.left) {
          dfs(node.left, count);
      }

      if (node.right) {
          dfs(node.right, count);
      }
  };

  dfs(root);

  return max;
};
