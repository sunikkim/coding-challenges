/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

O boolean if two trees are equal
I two binary trees p and q
C none
E empty trees

search through both trees recursively
check for node val equality at each node
if not equal
return false
if both nodes are null (made it to leaf)
return true
perform recursive search on both left and right branches
*/

const isSameTree = (p, q) => {
  if (!p && !q) {
      return true;
  }

  if (!p || !q) {
      return false;
  }

  if (p.val !== q.val) {
      return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};