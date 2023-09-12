/**
 * Write a function, linkedListFind, that takes in the head of
 * a linked list and a target value. The function should return
 * a boolean indicating whether or not the linked list contains
 * the target.
 */

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> build array n length

const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack

const linkedListFindRec = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};
export default { linkedListFind, linkedListFindRec };
