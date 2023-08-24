/**
 * Write a function, mostuentChar, that takes in a string
 * as an argument. The function should return the most frequent
 * character of the string. If there are ties, return the
 * character that appears earlier in the string.
 *
 * You can assume that the input string is non-empty.
 *
 * EX) mostuentChar('bookeeper'); // -> 'e'
 *
 * Assumptions:
 * IN: string -> word
 * OUT: string -> letter of most frequent character
 * input string will have at least one char that appears > 1
 *
 * Considerations:
 * the most frequent is first & last letter
 * long words, short words, double letters
 * the most frequent is not double letters
 *
 * Approach:
 * loop through word and build frequency map
 * initialize max variable
 * loop through frequency map to compare
 */

const mostFrequentChar = (s) => {
  const count = {};

  for (let letter of s) {
    if (!(letter in count)) count[letter] = 0;
    count[letter]++;
  }

  let most = null;
  for (let letter in count) {
    if (most === null || count[letter] > count[most]) {
      most = letter;
    }
  }

  return most;
};

export default mostFrequentChar;
