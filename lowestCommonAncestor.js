/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

O node that is lowest common ancestor of given nodes p and q
I binary tree, node p and node q
C none
E none

do DFS, while keeping flags on if nodes p and q have been found. if both have been found, the current node at that moment is the lowest common ancestor.

*/

const lowestCommonAncestor = (root, p, q) => {
  let answer;

  const search = (currNode, p, q) => {
      if (!currNode) {
          return false;
      }

      const left = search(currNode.left, p, q) ? 1 : 0;
      const right = search(currNode.right, p, q) ? 1 : 0;
      const mid = (currNode === p || currNode === q) ? 1 : 0;

      if (left + right + mid >= 2) {
          answer = currNode;
          return;
      }

      return (left + right + mid > 0);
  };

  search(root, p, q);

  return answer;
};
