// MIDDLE VALUE
// -----------------------------------------------------------------
// Write a function, middleValue, that takes in the head of a linked
// list as an argument. The function should return the value of the
// middle node in the linked list. If the linked list has an even
// number of nodes, then return the value of the second middle node.

// You may assume that the input list is non-empty.

// Example:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// // a -> b -> c -> d -> e
// middleValue(a); // c

// Approach:
// Can use array to collect values, then find middle value
// Or can use turtle & hare approach (fast & slow pointers), return middle when fast is null

// Using array approach:
// const middleValue = (head) => {
//   const values = [];
//   let current = head;

//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//   }

//   return values[Math.floor(values.length / 2)];
// };

// Complexity:
// n = number of nodes
// Time: O(n)
// Space: O(n) -> Creating and storing node values in array

// Optimized using fast/slow pointers approach:
const middleValue = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

// Complexity:
// n = number of nodes
// Time: O(n)
// Space: O(1)

export default { middleValue };
