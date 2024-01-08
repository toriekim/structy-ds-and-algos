// LINKED PALINDROME
// -----------------------------------------------------------------
// Write a function, linkedPalindrome, that takes in the head of a
// linked list as an argument. The function should return a boolean
// indicating whether or not the linked list is a palindrome. A
// palindrome is a sequence that is the same both forwards and
// backwards.

// Example:
// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(2);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 3 -> 2 -> 7 -> 7 -> 2 -> 3
// linkedPalindrome(a); // true

// Assumptions & Considerations:
// - Need to know values of LL, "center" of LL
// - If we need above, need to loop through the LL first
// - Keep track of values in array
// - If even # of nodes, 2 at center need to have same value
// - If odd # of nodes, 1 at center
// - If head is only node or head is null, return true

// First attempt passing solution:
// const linkedPalindrome = (head) => {
//   let current = head;
//   const values = [];
//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//   }

//   let i = 0;
//   let j = values.length - 1;
//   while (i <= j) {
//     if (values[i] === values[j]) {
//       i++;
//       j--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// Optimized solution:
const linkedPalindrome = (head) => {
  let current = head;
  const values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values.join('') === values.reverse().join('');
};

// Complexity:
// n = # nodes
// Time: O(n) -> iterating through every node of LL
// Adding values to array (also linear time) and reversing array (after iteration) won't increase the time complexity in this case
// Space: O(n) -> because storing node values in array

export default { linkedPalindrome };
