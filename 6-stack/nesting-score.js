// NESTING SCORE
// -----------------------------------------------------------------
// Write a function, nestingScore, that takes in a string of
// brackets as an argument. The function should return the score of
// the string according to the following rules:

// - [] is worth 1 point
// - XY is worth m + n points where X, Y are substrings of
//   well-formed brackets and m, n are their respective scores
// - [S] is worth 2 * k points where S is a substring of
//   well-formed brackets and k is the score of that substring

// You may assume that the input only contains well-formed square
// brackets.

// Examples:
// nestingScore("[]"); // -> 1
// nestingScore("[][][]"); // -> 3
// nestingScore("[[][]]"); // -> 4
// nestingScore("[[][][]]"); // -> 6
// nestingScore("[[][]][]"); // -> 5

/**
 * Returns the score of a string with well-formed square brackets
 * @param   {String} str Input containing only square brackets
 * @returns {Number}     Score of the string according to rules
 */

const nestingScore = (str) => {
  // Initialize stack with 0 since str will start with opening bracket
  const stack = [0]
  for (let bracket of str) {
    // If bracket is opening, add 0 to stack
    if (bracket === "[") {
      stack.push(0)
    } else {
      // If bracket is closing, pop from stack
      const popped = stack.pop()
      // If popped element is 0, add 1 to the last element in stack
      if (popped === 0) {
        stack[stack.length - 1] += 1
      } else {
        // Otherwise, double popped and add to last element in stack
        stack[stack.length - 1] += 2 * popped
      }
    }
  }
  // Return the first element in stack which is the final score
  return stack[0]
};

export default { nestingScore };
