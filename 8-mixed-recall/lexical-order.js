// LEXICAL ORDER
// -----------------------------------------------------------------
// Write a function, lexicalOrder, that takes in 2 words and an
// alphabet string as an argument. The function should return true
// if the first word should appear before the second word if
// lexically-ordered according to the given alphabet order. If the
// second word should appear first, then return false.

// Note that the alphabet string may be any arbitrary string.

// Intuitively, Lexical Order is like "dictionary" order:

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// lexicalOrder("apple", "dock", alphabet); // -> true

// First attempt passing:
// const lexicalOrder = (word1, word2, alphabet) => {
//   const dictionary = createMap(alphabet)

//   let i = 0
//   while (i < word1.length && i < word2.length) {
//     const first = dictionary[word1[i]]
//     const second = dictionary[word2[i]]
//
//     if (first === second) {
//       i++
//     } else if (first < second) {
//       return true
//     } else if (first > second) {
//       return false
//     }
//   }
//   return word1.slice(i).length === 0 ? true : false
// };

// const createMap = (alphabet) => {
//   const dictionary = {}
//   for (let i = 0; i < alphabet.length; i++) {
//     const letter = alphabet[i]
//     dictionary[letter] = i
//   }
//   return dictionary
// }

// Using .indexOf() instead of creating map:
const lexicalOrder = (word1, word2, alphabet) => {
  const maxLength = Math.max(word1.length, word2.length);

  // Loop through each input word and compare letters
  for (let i = 0; i < maxLength; i++) {
    // Compare index of each letter
    // If a word has already been checked, will return -1 because word[i] is undefined
    // Not too concerned with using .indexOf() in loop,
    // because alphabet will always have 26 letters; not too bad
    const first = alphabet.indexOf(word1[i]);
    const second = alphabet.indexOf(word2[i]);

    // If word1's first letter is less than word2's first letter, in lexical order
    if (first < second) {
      return true;
      // If word1's first letter is greater, not in order
    } else if (first > second) {
      return false;
    }
  }
  // If loop completed successfully, words are in order
  return true;
};

// n = length of shorter string
// Time: O(n)
// Space: O(1)

export default { lexicalOrder };
