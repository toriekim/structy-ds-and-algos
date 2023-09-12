/**
 * Write a function, reverseList, that takes in the head of a
 * linked list as an argument. The function should reverse the
 * order of the nodes in the linked list in-place and return the
 * new head of the reversed linked list.
 *
 * Example:
 *
 * const a = new Node("a");
 * const b = new Node("b");
 * const c = new Node("c");
 * const d = new Node("d");
 * const e = new Node("e");
 * const f = new Node("f");
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 * e.next = f;
 *
 * // a -> b -> c -> d -> e -> f
 *
 * reverseList(a); // f -> e -> d -> c -> b -> a
 */

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev.next;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n)
const reverseListRec = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

export default { reverseList, reverseListRec };
