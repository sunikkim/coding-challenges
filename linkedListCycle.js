/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

// ideal approach (tortoise and hare algorithm)
const hasCycle = (head) => {
  if (!head) {
      return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};


/*
initialize two pointers
set one pointer to move twice as fast
iterate through list with both pointers
if both pointers ever point at same node, there is a cycle
return true
if slow node reaches end and no overlap
return false

*/

// overwriting approach
const hasCycle = (head) => {
  let node = head;

  while (node) {
      node.val = '*';

      node = node.next;
      if (!node) {
         return false;
      }
      if (node.val === '*') {
         return true;
      }
  }

  return false;
};