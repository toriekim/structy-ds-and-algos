// CAN CONCAT
// -----------------------------------------------------------------
// Write a function, canConcat, that takes in a string and an array
// of words as arguments. The function should return boolean
// indicating whether or not it is possible to concatenate words of
// the array together to form the string.

// You may reuse words of the array as many times as needed.

// Example:
// canConcat("oneisnone", ["one", "none", "is"]); // -> true

/**
 * Returns if it's possible to concatenate words from the array to
 * form the target string
 * @param   {String}  s     Target string to form
 * @param   {Array}   words Array of strings
 * @returns {Boolean}       True if possible to form target string
 */

// Brute Force:
// const canConcat = (s, words) => {
//   if (s.length === 0) return true

//   for (let word of words) {
//     if (s.startsWith(word)) {
//       if (canConcat(s.slice(word.length), words)) return true
//     }
//   }
//   return false
// };

// Dynamic Programming w/ memoization:
const canConcat = (s, words, memo = {}) => {
  // If suffix is in memo (already explored), return value
  if (s in memo) return memo[s];
  // Base case: If suffix length is 0, it's possible, return true
  if (s.length === 0) return true;

  // Loop through possible words from array
  for (let word of words) {
    // If suffix starts with the word...
    if (s.startsWith(word)) {
      // Get rid of the start of the suffix, shrink string length
      const suffix = s.slice(word.length);
      // Pass into recursive call & if true, concat is possible
      if (canConcat(suffix, words, memo)) {
        memo[s] = true;
        return true;
      }
    }
  }
  // If all possibilities explored, not possible, return false
  memo[s] = false;
  return false;
};

// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)

export default { canConcat };
