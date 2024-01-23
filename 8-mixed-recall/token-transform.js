// -----------------------------------------------------------------
// Write a function, tokenTransform, that takes in an object of
// tokens and a string. In the object, the replacement values for a
// token may reference other tokens. The function should return a
// new string where tokens are replaced with their fully evaluated
// string values.

// Tokens are enclosed in a pair of '$'.

// You may assume that there are no circular token dependencies.

// const tokens = {
//   '$LOCATION$': '$ANIMAL$ park',
//   '$ANIMAL$': 'dog',
// };
// tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens);
// // -> 'Walk the dog in the dog park!'

const tokenTransform = (s, tokens) => {
  // Initialize final output array
  const output = [];
  // Create 2 pointers, first at 0, second at 1
  let i = 0;
  let j = 1;

  // Loop through input string
  while (i < s.length) {
    // If char at i isn't a "$", add to output array, move pointers
    if (s[i] !== '$') {
      output.push(s[i]);
      i++;
      j++;
    } else if (s[j] !== '$') {
      // If char at j isn't a "$", continue to increment until it is
      j++;
    } else {
      // Otherwise, char at i and j are "$" and need to be replaced
      const key = s.slice(i, j + 1);
      // Value might contain tokens, so it needs to be evaluated
      // Pass value to recursive call to evaluate
      const value = tokens[key];
      const evaluated = tokenTransform(value, tokens);
      // Update tokens to replace with evaluated value
      tokens[key] = evaluated;
      // Add to output array and update pointers
      output.push(evaluated);
      i = j + 1;
      j = i + 1;
    }
  }
  // Return result string
  return output.join('');
};

// n = length of longest string of value
// m = # of unique tokens
// Time: ~O(n^m)
// Space: ~O(n^m)

export default { tokenTransform };
