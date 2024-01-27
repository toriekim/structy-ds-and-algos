/**
 * Write a function, getNodeValue, that takes in the head of a
 * linked list and an index. The function should return the
 * value of the linked list at the specified index.
 *
 * If there is no node at the given index, then return null.
 */

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> build array n length

const getNodeValue = (head, index) => {
  let current = head;
  while (current !== null) {
    if (index === 0) return current.val;
    current = current.next;
    index--;
  }
  return null;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack

const getNodeValueRec = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};

export { getNodeValue, getNodeValueRec };
