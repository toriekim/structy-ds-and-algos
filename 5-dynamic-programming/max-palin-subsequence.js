// MAX PALIN SUBSEQUENCE
// -----------------------------------------------------------------
// Write a function, maxPalinSubsequence, that takes in a string as
// an argument. The function should return the length of the
// longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any
// characters of the string, while maintaining the relative order
// of characters.

// Example:
// maxPalinSubsequence("luwxult"); // -> 5

/**
 * Returns the length of the longest palindrome subsequence of a string
 * @param   {String} str String of letters
 * @returns {Number}     Length of palindrome subsequence
 */

// Brute Force:
// n = length of string | Time & Space: O(2^n)
// const maxPalinSubsequence = (str) => {
//   if (str.length === 0) return 0;
//   if (str.length === 1) return 1;

//   const first = str[0];
//   const last = str[str.length - 1];

//   if (first === last) {
//     return 2 + maxPalinSubsequence(str.slice(1, -1));
//   } else {
//     const withFirst = maxPalinSubsequence(str.slice(0, -1));
//     const withLast = maxPalinSubsequence(str.slice(1, str.length));
//     return Math.max(withFirst, withLast);
//   }
// };

// Dynamic Programming w/ memoization
// n = length of string | Time & Space: O(n^2)
// Instead of using .slice() and creating a new string each call,
// we can use pointers at the first and last letter in the string
const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  // If the current substring is in the memo, return memo length
  const key = i + ',' + j;
  if (key in memo) return memo[key];

  // If there is only 1 letter left, return length of 1
  if (i === j) return 1;
  // If i is greater than j, there are no letters left, return 0
  if (i > j) return 0;

  // If the first and last letters are the same...
  const first = str[i];
  const last = str[j];
  if (first === last) {
    // Add count of 2 & remove them from the string in recursive call
    memo[key] = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);
  } else {
    // Else, decision branch -> one taking first letter, other taking the last letter
    const withFirst = maxPalinSubsequence(str, i, j - 1, memo);
    const withLast = maxPalinSubsequence(str, i + 1, j, memo);
    // Add the count of the longer length returned
    memo[key] = Math.max(withFirst, withLast);
  }

  // Return the longest length of the palindrome subsequence
  return memo[key];
};

export default { maxPalinSubsequence };
