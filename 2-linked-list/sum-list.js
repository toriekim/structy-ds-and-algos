/**
 * Write a function, sumList, that takes in the head of a
 * linked list containing numbers as an argument. The function
 * should return the total sum of all values in the linked list.
 */

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)

const sumList = (head) => {
  let current = head;
  let sum = 0;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack
const sumListRec = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

export { sumList, sumListRec };
