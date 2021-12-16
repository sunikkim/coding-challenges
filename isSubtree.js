/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

O boolean if subroot is in root
I tree, subtree
C none (tree can be subtree of itself)
E none

traverse tree
at each node, check if node === subroot
if node === subroot
return true
if iteration finishes
return false
*/

const isSubtree = (root, subRoot) => {
  const isIdentical = (node1, node2) => {
      if (!node1 && !node2) {
          return true;
      }

      if (!node1 || !node2 || node1.val !== node2.val) {
          return false;
      }

      return isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right);
  };

  const dfs = (node) => {
      if (!node) {
          return false;
      }

      if (node.val === subRoot.val && isIdentical(node, subRoot)) {
          return true;
      }

      return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};