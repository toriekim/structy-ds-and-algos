// OVERLAP SUBSEQUENCE
// -----------------------------------------------------------------
// Write a function, overlapSubsequence, that takes in two strings
// as arguments. The function should return the length of the
// longest overlapping subsequence.

// A subsequence of a string can be created by deleting any
// characters of the string, while maintaining the relative order
// of characters.

// Example:
// overlapSubsequence("dogs", "daogt"); // -> 3

/**
 * Returns the length of the longest overlapping subsequence
 * @param  {String} str1 First string to compare
 * @param  {String} str2 Second string to compare
 * @return {Number}      Max length of an overlapping subsequence
 */

// Brute force:
// const overlapSubsequence = (str1, str2, i = 0, j = 0) => {
//   if (i === str1.length || j === str2.length) return 0

//   if (str1[i] === str2[j]) {
//     return 1 + overlapSubsequence(str1, str2, i + 1, j + 1)
//   } else {
//     const withFirst = overlapSubsequence(str1, str2, i, j + 1)
//     const withSecond = overlapSubsequence(str1, str2, i + 1, j)
//     return Math.max(withFirst, withSecond)
//   }
// };

// Use pointers at indices of both strings
const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  // If this combo has been explored before, return length of overlapping sequence
  const key = i + ',' + j;
  if (key in memo) return memo[key];
  // If either string is "empty", return 0 (no length)
  if (i === str1.length || j === str2.length) return 0;

  // If first letters of both strings are the same...
  if (str1[i] === str2[j]) {
    // Add length of 1 + remove them from both strings in recursive call
    memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    // Else, explore with first letter of first string
    const withFirst = overlapSubsequence(str1, str2, i, j + 1, memo);
    // And with first letter of second string
    const withSecond = overlapSubsequence(str1, str2, i + 1, j, memo);
    // Take the longer returned from decision tree exploration
    memo[key] = Math.max(withFirst, withSecond);
  }

  // Return the length of the overlapping subsequence
  return memo[key];
};

export default { overlapSubsequence };
