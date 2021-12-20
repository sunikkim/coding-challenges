/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

O LCA of given nodes p and q
I BST, two nodes p and q
C none
E empty tree

recursive solution using structure of BST to advantage
if both p and q are greater than current node, then LCA will be in right branch, so recurse on right branch
if both p and q are less than current node, then LCA will be in left branch, so recurse on left branch
otherwise we've found the split point, so return current node

O(n) time complexity (iterating through tree)
O(n) space complexity (due to recursion/call stack)
*/

const lowestCommonAncestor = (root, p, q) => {
  let curr = root.val;
  let pVal = p.val;
  let qVal = q.val;

  if (pVal > curr && qVal > curr) {
      return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < curr && qVal < curr) {
      return lowestCommonAncestor(root.left, p, q);
  } else {
      return root;
  }
};