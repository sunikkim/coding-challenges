/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

O boolean if binary tree is valid
I binary tree
C none
E empty tree is valid, returns true

make inner checking function
func will check if each node is valid:
if left node is less than node &&
if right node is greater than node

search through tree, running checking function on every node
if checking function returns false at any point
return false
else if finished leaf is reached without returning false
return true

O(N) time complexity
O(N) space complexity (heigh of call stack)
*/

const isValidBST = (root) => {
  const check = (node, low, high) => {
      if (!node) {
          return true;
      }

      if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) {
          return false;
      }

      return check(node.left, low, node.val) && check(node.right, node.val, high);
  };

  return check(root);
};