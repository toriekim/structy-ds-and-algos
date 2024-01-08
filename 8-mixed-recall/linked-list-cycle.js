// LINKED LIST CYCLE
// -----------------------------------------------------------------
// Write a function, linkedListCycle, that takes in the head of a
// linked list as an argument. The function should return a boolean
// indicating whether or not the linked list contains a cycle.

// Example:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = b; // cycle

// //         _______
// //       /        \
// // a -> b -> c -> d

// linkedListCycle(a);  // true

// Approach:
// - Iterate through LL, keeping track of visited nodes and their value in a set
// - If current node's value is in Set, return false (there's a cycle)
// - Otherwise, add current value to Set, move pointer
// - Return false if iterated through LL without a cycle

// const linkedListCycle = (head) => {
//   const visited = new Set();
//   let current = head;

//   while (current !== null) {
//     if (visited.has(current)) return true;

//     visited.add(current);
//     current = current.next;
//   }

//   return false;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n) -> storing visited in Set

// Optimized w/ fast/slow approach:
// If there's a cycle, slow & fast pointer will collide at a node
const linkedListCycle = (head) => {
  let slow = head;
  let fast = head;
  // Need the following boolean flag to indicate whethor or not it's the first pass
  // If we don't use it, the conditional logic (slow === fast) will not work as intended since both pointers start at the head node
  let firstIteration = true;

  while (fast !== null && fast.next !== null) {
    if (slow === fast && !firstIteration) return true;
    slow = slow.next;
    fast = fast.next.next;
    // Make sure to change the flag
    firstIteration = false;
  }

  return false;
};

// Complexity:
// n = number of nodes
// Time: O(n)
// Space: O(1)

export default { linkedListCycle };
