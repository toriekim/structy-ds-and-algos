// SUBSTITUTING SYNONYMS
// -----------------------------------------------------------------
// Write a function, substitutingSynonyms, that takes in a sentence
// and an object as arguments. The object contains words as keys
// whose values are arrays containing synonyms. The function should
// return an array containing all possible sentences that can be
// formed by substituting words of the sentence with their synonyms.

// You may return the possible sentences in any order, as long as
// you return all of them.

// Example:
// const sentence = "follow the yellow brick road";
// const synonyms = {
//   follow: ["chase", "pursue"],
//   yellow: ["gold", "amber", "lemon"],
// };

// substituteSynonyms(sentence, synonyms);
// // [
// //   'chase the gold brick road',
// //   'chase the amber brick road',
// //   'chase the lemon brick road',
// //   'pursue the gold brick road',
// //   'pursue the amber brick road',
// //   'pursue the lemon brick road'
// // ]

const substituteSynonyms = (sentence, synonyms) => {
  if (sentence.length === 0) return [''];

  const { choices, remaining } = getSynonyms(sentence, synonyms);
  const suffixes = substituteSynonyms(remaining, synonyms);
  const sentences = [];

  for (let choice of choices) {
    for (let suffix of suffixes) {
      const suffixPart = suffix.length > 0 ? ' ' + suffix : suffix;
      sentences.push(choice + suffixPart);
    }
  }

  return sentences;
};

const getSynonyms = (sentence, synonyms) => {
  const words = sentence.split(' ');
  const firstWord = words[0];
  const remaining = words.slice(1).join(' ');

  if (firstWord in synonyms) {
    const choices = synonyms[firstWord];
    return { choices, remaining };
  } else {
    return { choices: [firstWord], remaining };
  }
};

// n = number of words in sentence
// m = max number of synonyms for a word
// Time: ~O(m^n)
// Space: ~O(m^n)

// const substituteSynonyms = (sentence, synonyms) => {
//   const words = sentence.split(' ');
//   const arrays = generate(words, synonyms);
//   return arrays.map(subarray => subarray.join(' '));
// };

// const generate = (words, synonyms) => {
//   if (words.length === 0) return [[]];

//   const firstWord = words[0];
//   const remainingWords = words.slice(1);
//   if (firstWord in synonyms) {
//     const result = [];
//     const subarrays = generate(remainingWords, synonyms);
//     for (let synonym of synonyms[firstWord]) {
//       result.push(...subarrays.map(subarray => [ synonym, ...subarray ]));
//     }
//     return result;
//   } else {
//     const subarrays = generate(remainingWords, synonyms);
//     return subarrays.map(subarray => [ firstWord, ...subarray ]);
//   };
// };

export default { substituteSynonyms, getSynonyms };
