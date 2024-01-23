// TOKEN REPLACE
// -----------------------------------------------------------------
// Write a function, tokenReplace, that takes in an object of
// tokens and a string. The function should return a new string
// where tokens are replaced.

// Tokens are enclosed in a pair of '$'. You can assume that the
// input string is properly formatted. Tokens should be replaced
// from left to right in the string (see test_05).

// const tokens = {
//   '$LOCATION$': 'park',
//   '$ANIMAL$': 'dog',
// };
// tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens);
// // -> 'Walk the dog in the park!'

// Approach:
// Use 2 pointers, i & j, while iterating over string
// If char at i is "$", then keep moving j forward until j is "$"
//  If char at j is "$", get the token, add word to output array
//  Update pointers to after the token
// If char at i isn't "$", add to output array
// Return joined array

// Brute force:
// const tokenReplace = (s, tokens) => {
//   const output = [];
//   let i = 0;
//   let j = i + 1;

//   while (i < s.length) {
//     const char = s[i];
//     if (char !== '$') {
//       output.push(char);
//       i++;
//       j++;
//     } else {
//       if (s[j] === '$') {
//         const token = s.slice(i, j + 1);
//         output.push(tokens[token]);
//         i = j + 1;
//         j = i + 1;
//       } else {
//         while (s[j] !== '$') {
//           j++;
//         }
//       }
//     }
//   }
//   return output.join('');
// };

// Optimized:
const tokenReplace = (s, tokens) => {
  const output = [];
  // Set up 2 pointers, first at 0, second at 1
  let i = 0;
  let j = 1;

  // Iterate over string until the end
  while (i < s.length) {
    const char = s[i];
    // If char at i isn't "$", add to output, move pointers by 1
    if (char !== '$') {
      output.push(char);
      i++;
      j = i + 1;
    } else if (s[j] !== '$') {
      // If char at j isn't "$", increment j by 1
      j++;
    } else {
      // If char at j is "$", get token & push into output
      const key = s.slice(i, j + 1);
      output.push(tokens[key]);
      // Update pointer positions to after the key
      i = j + 1;
      j = i + 1;
    }
  }
  // Return joined string
  return output.join('');
};

// n = length of string
// Time: O(n)
// Space: O(n)

export default { tokenReplace };
