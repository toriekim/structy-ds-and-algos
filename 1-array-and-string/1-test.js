/* eslint-env mocha */
import { expect } from 'chai';
import anagrams from './anagrams.js';

describe('1-Array-and-String', () => {
  describe('anagrams', () => {
    it('returns a boolean indicating whether or not the two strings are anagrams', () => {
      expect(anagrams('restful', 'fluster')).to.equal(true);
      expect(anagrams('cats', 'tocs')).to.equal(false);
      expect(anagrams('paper', 'reapa')).to.equal(false);
      expect(anagrams('elbow', 'below')).to.equal(true);
      expect(anagrams('night', 'thing')).to.equal(true);
    });

    it('handles two strings that start with the same prefix', () => {
      expect(anagrams('tax', 'taxi')).to.equal(false);
      expect(anagrams('taxi', 'tax')).to.equal(false);
    });

    it('handles two strings that have the same letters but in different frequencies', () => {
      expect(anagrams('abbc', 'aabc')).to.equal(false);
      expect(anagrams('po', 'popp')).to.equal(false);
    });

    it('handles two strings with the same frequencies but of different letters', () => {
      expect(anagrams('pp', 'oo')).to.equal(false);
    });
  });
});
