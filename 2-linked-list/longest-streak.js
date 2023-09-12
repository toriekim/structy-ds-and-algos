/*
Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

Example:
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
*/

// Iterative
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(1)
const longestStreak = (head) => {
  let prevVal = null;
  let streak = 0;
  let longest = 0;
  let current = head;

  while (current !== null) {
    if (current.val !== prevVal) {
      streak = 1;
    } else {
      streak += 1;
    }
    longest = Math.max(streak, longest);
    prevVal = current.val;
    current = current.next;
  }

  return longest;
};

// Recursive
// Time Complexity: O(n) -> n = # of nodes
// Space Complexity: O(n)
const longestStreakRec = (head, prevVal = null, streak = 0, longest = 0) => {
  if (head === null) return longest;

  if (head.val !== prevVal) {
    streak = 1;
  } else {
    streak += 1;
  }
  longest = Math.max(streak, longest);

  return longestStreakRec(head.next, head.val, streak, longest);
};

export default { longestStreak, longestStreakRec };
