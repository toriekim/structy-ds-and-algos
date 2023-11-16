// DECOMPRESS BRACES
// -----------------------------------------------------------------
// Write a function, decompressBraces, that takes in a compressed
// string as an argument. The function should return the string
// decompressed.

// The compression format of the input string is 'n{subString}',
// where the subString within braces should be repeated n times.

// You may assume that every number n is guaranteed to be an
// integer between 1 through 9.

// You may assume that the input is valid and the decompressed
// string will only contain alphabetic characters.

// decompressBraces("2{q}3{tu}v"); // -> qqtututuv

/**
 * Returns a decompressed string from input compressed string
 * @param   {String} s Compressed string w/ format 'n{subString}'
 * @returns {String}   Decompressed string w/ only alphabetic chars
 */

const decompressBraces = (s) => {
  // Create nums string to check for numeric characters
  const nums = '123456789';
  // Initialize stack
  const stack = [];

  for (let char of s) {
    if (char === '}') {
      let substring = '';
      // decompress -> pop until we get a number
      while (stack.length && !nums.includes(stack[stack.length - 1])) {
        substring = stack.pop() + substring;
      }

      let multiplier = stack.pop();
      let decompressed = '';
      while (multiplier > 0) {
        decompressed += substring;
        multiplier--;
      }
      stack.push(decompressed);
    } else if (char !== '{') {
      stack.push(char);
    }
  }

  return stack.join('');
};

// const decompressBraces = (s) => {
//   const nums = '123456789';
//   const stack = [];
//   for (let char of s) {
//     if (nums.includes(char)) {
//       stack.push(Number(char));
//     } else {
//       if (char === '}') {
//         let segment = '';
//         while (typeof stack[stack.length - 1] !== 'number') {
//           const popped = stack.pop();
//           segment = popped + segment;
//         }
//         const number = stack.pop();
//         stack.push(repeat(segment, number));
//       } else if (char !== '{') {
//         stack.push(char);
//       }
//     }
//   }

//   return stack.join('');
// };

// const repeat = (str, n) => {
//   let result = '';
//   for (let i = 0; i < n; i += 1) {
//     result += str;
//   }
//   return result;
// };

// s = length of string
// m = count of brace pairs
// Time: O((9^m) * s)
// Space: O((9^m) * s)

export default { decompressBraces };
