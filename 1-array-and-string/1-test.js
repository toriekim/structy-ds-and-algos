/* eslint-env mocha */
import { expect } from 'chai';
import uncompress from './uncompress.js';
import compress from './compress.js';
import anagrams from './anagrams.js';
import mostFrequentChar from './most-frequent-char.js';
import pairSum from './pair-sum.js';
import pairProduct from './pair-product.js';
import intersection from './intersection.js';
import fiveSort from './five-sort.js';

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

  describe('compress', () => {
    it('returns a compressed version of the input string where consecutive occurrences are compressed into groups of numbers and characters', () => {
      expect(compress('ccaaatsss')).to.equal('2c3at3s');
    });

    it('handles consecutive occurences in the beginning of the string', () => {
      expect(compress('ssssbbz')).to.equal('4s2bz');
    });

    it('handles consecutive occurences in the middle of the string', () => {
      expect(compress('nnneeeeeeeeeeeezz')).to.equal('3n12e2z');
    });

    it('handles consecutive occurences in the end of the string', () => {
      expect(compress('ppoppppp')).to.equal('2po5p');
    });

    it('handles one long consecutive occurence of one letter', () => {
      expect(
        compress(
          'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
        )
      ).to.equal('127y');
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

  describe('mostFrequentChar', () => {
    it('returns the most frequently occuring character in a string', () => {
      expect(mostFrequentChar('bookeeper')).to.equal('e');
      expect(mostFrequentChar('david')).to.equal('d');
      expect(mostFrequentChar('abby')).to.equal('b');
      expect(mostFrequentChar('mississippi')).to.equal('i');
      expect(mostFrequentChar('potato')).to.equal('o');
      expect(mostFrequentChar('eleventennine')).to.equal('e');
      expect(mostFrequentChar('riverbed')).to.equal('r');
    });
  });

  describe('pairSum', () => {
    it('returns an array containing a pair of indices whose elements sum to the given target', () => {
      expect(pairSum([3, 2, 5, 4, 1], 8)).to.deep.equal([0, 2]);
      expect(pairSum([4, 7, 9, 2, 5, 1], 3)).to.deep.equal([3, 5]);
      expect(pairSum([6, 4, 2, 8], 12)).to.deep.equal([1, 3]);
    });

    it('handles the case where the elements are the first and last indices', () => {
      expect(pairSum([4, 7, 9, 2, 5, 1], 5)).to.deep.equal([0, 5]);
    });

    it('handles the case where the pair of elements are in the middle', () => {
      expect(pairSum([1, 6, 7, 2], 13)).to.deep.equal([1, 2]);
    });

    it('handles the case where there are only two elements that are the same', () => {
      expect(pairSum([9, 9], 18)).to.deep.equal([0, 1]);
    });
  });

  describe('pairProduct', () => {
    it('returns an array containing the pair of indices whose elements multiply to target', () => {
      expect(pairProduct([3, 2, 5, 4, 1], 8)).to.deep.equal([1, 3]);
      expect(pairProduct([3, 2, 5, 4, 1], 10)).to.deep.equal([1, 2]);
      expect(pairProduct([4, 7, 9, 2, 5, 1], 5)).to.deep.equal([4, 5]);
      expect(pairProduct([4, 7, 9, 2, 5, 1], 35)).to.deep.equal([1, 4]);
      expect(pairProduct([4, 6, 8, 2], 16)).to.deep.equal([2, 3]);
    });
  });

  describe('intersection', () => {
    it('returns a new array containing elements that are in both of the two arrays', () => {
      expect(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])).to.have.members([
        2, 6,
      ]);
      expect(intersection([2, 4, 6], [4, 2])).to.have.members([2, 4]);
      expect(intersection([4, 2, 1], [1, 2, 4, 6])).to.have.members([1, 2, 4]);
    });

    it('returns an empty array if there are no intersecting elements', () => {
      expect(intersection([0, 1, 2], [10, 11])).to.deep.equal([]);
    });

    it('can handle a very large input array', () => {
      const a = [];
      const b = [];
      for (let i = 0; i < 50000; i += 1) {
        a.push(i);
        b.push(i);
      }
      expect(intersection(a, b)).to.have.members([...b]);
    });
  });

  describe('fiveSort', () => {
    it('returns the mutated input array with all 5s at the end', () => {
      expect(fiveSort([12, 5, 1, 5, 12, 7])).to.deep.equal([
        12, 7, 1, 12, 5, 5,
      ]);
      expect(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])).to.deep.equal([
        2, 2, 10, 6, 1, 5, 5, 5, 5, 5,
      ]);
      expect(fiveSort([5, 5, 5, 1, 1, 1, 4])).to.deep.equal([
        4, 1, 1, 1, 5, 5, 5,
      ]);
    });

    it('handles an array with mostly 5s', () => {
      expect(fiveSort([5, 5, 6, 5, 5, 5, 5])).to.deep.equal([
        6, 5, 5, 5, 5, 5, 5,
      ]);
      expect(
        fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])
      ).to.deep.equal([4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]);
    });

    it('handles two very large arrays - one of only 5s, one of only another number', () => {
      const fives = new Array(20000).fill(5);
      const fours = new Array(20000).fill(4);
      const nums = [...fives, ...fours];
      expect(fiveSort(nums)).to.deep.equal([...fours, ...fives]);
    });
  });
});
