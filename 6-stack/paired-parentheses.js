// PAIRED PARENTHESES
// -----------------------------------------------------------------
// Write a function, pairedParentheses, that takes in a string as
// an argument. The function should return a boolean indicating
// whether or not the string has well-formed parentheses.

// You may assume the string contains only alphabetic characters,
// '(', or ')'.

// Examples:
// pairedParentheses("(david)((abby))"); // -> true
// pairedParentheses("()rose(jeff"); // -> false

/**
 * Returns a boolean indicating whether or not the input string's
 * parentheses are "well-formed".
 * @param   {string} str String with alphabetic characters, (, or )
 * @returns {boolean}    True if string has well-formed parentheses
 */

// Using an array as a stack:
// n = length of string -> Time: O(n) | Space: O(n)
// const pairedParentheses = (str) => {
//   const stack = [];
//   for (let char of str) {
//     if (char === '(') stack.push(char);
//     else if (char === ')') {
//       const pair = stack.pop();
//       if (pair !== '(') return false;
//     }
//   }
//   return stack.length === 0;
// };

// Optimized to use a variable to keep track of parens:
// Time: O(n) | Space: O(1)
const pairedParentheses = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === '(') count++;
    else if (char === ')') {
      if (count === 0) return false;
      count--;
    }
  }
  return count === 0;
};

export default { pairedParentheses };
