// DETECT DICTIONARY
// -----------------------------------------------------------------
// Write a function, detectDictionary, that takes in a dictionary
// of words and an alphabet string. The function should return a
// boolean indicating whether or not all words of the dictionary
// are lexically-ordered according to the alphabet.

// You can assume that all characters are lowercase a-z.

// You can assume that the alphabet contains all 26 letters.

// const dictionary = ["zoo", "tick", "tack", "door"];
// const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
// detectDictionary(dictionary, alphabet); // -> true

// Approach:
// Building off of Lexical Order problem

const detectDictionary = (dictionary, alphabet) => {
  // Loop through dictionary words
  for (let i = 0; i < dictionary.length - 1; i++) {
    // Compare current word with the next word
    const current = dictionary[i];
    const next = dictionary[i + 1];
    // Check the lexical order of the two words
    // If they are not in order, return false
    if (!lexicalOrder(current, next, alphabet)) return false;
  }
  // Done checking dictionary, in lexical order
  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    const val1 = alphabet.indexOf(word1[i]);
    const val2 = alphabet.indexOf(word2[i]);

    if (val1 < val2) return true;
    else if (val1 > val2) return false;
  }
  return true;
};

// n = # of words in dictionary
// k = # length of longest word
// Time: O(nk)
// Space: O(1)

export default { detectDictionary, lexicalOrder };
