/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/

const diameterOfBinaryTree = (root) => {
  const longestPath = (node) => {
    if (node === null) {
        return 0;
    }

    let leftPath = longestPath(node.left);
    let rightPath = longestPath(node.right);

    diameter = Math.max(diameter, leftPath + rightPath);

    return Math.max(leftPath, rightPath) + 1;
};

  let diameter = 0;
  longestPath(root);
  return diameter;
};