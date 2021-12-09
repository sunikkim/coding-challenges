/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

O given list with nth node from end removed
I linked list, n index from end
C none
E none

O(2n) = O(n) time complexity
O(1) space

set length variable equal to 0
make dummy node point to head
iterate through the list
  increment length by 1 on every step
set length to (length - n)
iterate through list again
  decrement length by 1 every step
  if length is 0
  set current node.next to node.next.next

return dummy.next
*/

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let length = 0;
  let list = head;

  while (list) {
      length++;
      list = list.next;
  }

  length -= n;

  list = dummy;

  while (length > 0) {
      length--;
      list = list.next;
  }

  list.next = list.next.next;

  return dummy.next;
};