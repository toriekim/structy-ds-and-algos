// QUICKEST CONCAT
// -----------------------------------------------------------------
// Write a function, quickestConcat, that takes in a string and an
// array of words as arguments. The function should return the
// minimum number of words needed to build the string by
// concatenating words of the array.

// You may use words of the array as many times as needed.

// Example:
// quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2

/**
 * Retruns the minimum number of words needed to build the target
 * string with words of the array
 * @param   {String} s     The target string
 * @param   {Array}  words The word options to concat
 * @returns {Number}       The minimum number of words needed or -1
 */

// Dynamic Programming w/ memoization:
const quickestConcat = (s, words) => {
  const result = _quickestConcat(s, words);
  // If it's not possible to create target string, return -1
  return result === Infinity ? -1 : result;
};

const _quickestConcat = (s, words, memo = {}) => {
  // If string is in memo, return value
  if (s in memo) return memo[s];
  // If string length is 0, return 0 (0 words to make empty string)
  if (s.length === 0) return 0;

  // Create variable to keep track of min # of words
  let minWords = Infinity;
  // Loop through possible words array
  for (let word of words) {
    // If the string starts with the words...
    if (s.startsWith(word)) {
      // Shrink the string, "get rid" of word from string
      const suffix = s.slice(word.length);
      // Count of 1 + recurisve call with new string
      const attempt = 1 + _quickestConcat(suffix, words, memo);
      // Reassing min if this path needs fewer words
      minWords = Math.min(minWords, attempt);
    }
  }
  // Add to memo and return min count of words needed
  memo[s] = minWords;
  return minWords;
};

// s = length of string
// w = # of words
// Time: ~O(sw)
// Space: O(s)

export default { quickestConcat };
