/**
 * Write a function, uncompress, that takes in a string as an argument.
 * The input string will be formatted into multiple groups according to the following pattern:
 *
 * <number><char>
 * for example, '2c' or '3a'.
 *
 * The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
 * You may assume that the input string is well-formed according to the previously mentioned pattern.
 */

const uncompress = (s) => {
  const numbers = '0123456789';
  const result = [];

  // i points to number (may have 1+ digits)
  let i = 0;
  // j pointer looks for alpha char (letter)
  let j = 0;
  while (j < s.length) {
    // if current char is a number, then move j
    if (numbers.includes(s[j])) {
      j++;
    }
    // if current char is a letter, repeat s[j] into result array
    else {
      const num = s.slice(i, j);
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      // move j & move i -> j to restart search for another group
      j++;
      i = j;
    }
  }
  // join array to return final string
  return result.join('');
};

module.exports = {
  uncompress,
};
