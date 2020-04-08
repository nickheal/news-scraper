/**
 * Removes words shorter than a certain length from an array
 * @param {Object[]} words - all the words
 * @param {number} length - the shorters length of word to keep
 * @returns {Object[]}
 */
export default function stripWordsShorterThanX(words, length) {
  return words.filter(({ word }) => word.length >= length);
}
