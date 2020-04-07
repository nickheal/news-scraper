/**
 * Sums the numbers in an array
 * @param {number} acc - the running total
 * @param {number} val - current number to add
 * @returns {number}
 */
function sum(acc = 0, val = 0) {
  return acc + val;
}

/**
 * Gets the average length of all the words in an array
 * @param {string[]} words - the words to get the average from
 * @returns {number}
 */
export default function getAverageWordLength(words) {
  return words
    .map(word => word.length)
    .reduce(sum) / words.length;
}
