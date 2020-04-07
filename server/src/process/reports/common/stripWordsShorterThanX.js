/**
 * Removes words shorter than a certain length from an array
 * @param {object[]} words - all the words
 * @param {number} length - the shorters length of word to keep
 * @returns {object[]}
 */
export default function stripWordsShorterThanX(words, length) {
  return words.filter(({ word }) => word.length >= length);
}
