/**
 * Write a function, anagrams, that takes in two strings as arguments.
 * The function should return a boolean indicating whether or not the
 * strings are anagrams. Anagrams are strings that contain the same
 * characters, but in any order.
 *
 * EX) anagrams('restful', 'fluster'); // -> true
 */

/**
 * Assumptions:
 * IN: 2 strings
 * OUT: boolean
 * anagrams = strings that contain same characters + frequencies
 *
 * Considerations:
 * different string lengths
 * same characters, different frequencies
 *
 * Approach:
 * create map of s1 [key: letter]: [value: freq #]
 * loop through s2 and decrement from s1map
 * loop through s1map and return false if value > 0
 * return true
 */

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const count = {};
  for (let letter of s1) {
    if (!(letter in count)) count[letter] = 0;
    count[letter]++;
  }

  for (let letter of s2) {
    if (!(letter in count)) return false;
    else count[letter]--;
  }

  for (let letter in count) {
    if (count[letter] !== 0) return false;
  }

  return true;
};

export default anagrams;
