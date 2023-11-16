// BEFITTING BRACKETS
// -----------------------------------------------------------------
// Write a function, befittingBrackets, that takes in a string as
// an argument. The function should return a boolean indicating
// whether or not the string contains correctly matched brackets.

// You may assume the string contains only characters: ( ) [ ] { }

// befittingBrackets('(){}[](())'); // -> true

/**
 * Returns a boolean indicating whether or not the string contains
 * correctly matched brackets
 * @param   {String}  str String containing only: ( ) [ ] { }
 * @returns {Boolean}     True if all brackets match
 */

const befittingBrackets = (str) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let stack = [];

  for (let char of str) {
    if (char in brackets) {
      stack.push(char);
    } else {
      const pair = stack.pop();
      if (brackets[pair] !== char) return false;
    }
  }
  return stack.length === 0;
};

// const befittingBrackets = (str) => {
//   const stack = [];

//   const brackets = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   };

//   for (let char of str) {
//     if (char in brackets) {
//       stack.push(brackets[char]);
//     } else {
//       if (stack.length > 0 && stack[stack.length - 1] === char) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

// n = length of string
// Time: O(n)
// Space: O(n)

export default { befittingBrackets };
