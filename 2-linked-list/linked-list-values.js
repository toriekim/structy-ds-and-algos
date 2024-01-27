/**
 * Write a function, linkedListValues, that takes in the head
 * of a linked list as an argument. The function should return
 * an array containing all values of the nodes in the linked
 * list.
 *
 * EX)
 * const a = new Node("a");
 * const b = new Node("b");
 * const c = new Node("c");
 * const d = new Node("d");
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * // a -> b -> c -> d
 *
 * linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
 */

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> build array n length

const linkedListValues = (head) => {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n) -> n recursive calls on stack
const linkedListValuesRec = (head) => {
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (current, values) => {
  if (current === null) return;

  values.push(current.val);
  _linkedListValues(current.next, values);
};

export { linkedListValues, linkedListValuesRec };
