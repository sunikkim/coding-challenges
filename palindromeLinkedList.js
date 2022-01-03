/*
Given the head of a singly linked list, return true if it is a palindrome.
*/

// O(1) space
const isPalindrome = (head) => {
  let slow = head;
  let fast = head;
  let prev = null;
  let temp = null;

  // finding midpoint
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  prev = slow;
  slow = slow.next;
  prev.next = null;

  // reversing second half
  while (slow) {
      temp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
  }

  fast = head;
  slow = prev;

  // testing for palindrome
  while (slow) {
      if (fast.val !== slow.val) {
          return false;
      } else {
          slow = slow.next;
          fast = fast.next;
      }
  }

  return true;
};