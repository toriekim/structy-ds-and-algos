/* eslint-env mocha */
import { expect } from 'chai';
import uncompress from './uncompress.js';
import anagrams from './anagrams.js';

describe('1-Array-and-String', () => {
  describe('uncompress', () => {
    it(`should uncompress an input string where earch 'char' of a group is repeated 'number' of times consecutively`, () => {
      expect(uncompress('2c3a1t')).to.equal('ccaaat');
      expect(uncompress('4s2b')).to.equal('ssssbb');
      expect(uncompress('2p1o5p')).to.equal('ppoppppp');
    });

    it('handles double digit numbers', () => {
      expect(uncompress('3n12e2z')).to.equal('nnneeeeeeeeeeeezz');
    });

    it('handles triple digit numbers', () => {
      expect(uncompress('127y')).to.equal(
        'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
      );
    });
  });

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
