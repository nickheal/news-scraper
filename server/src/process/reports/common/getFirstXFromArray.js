/**
 * Gets the first items from an array
 * @param {[]} arr - any array
 * @param {number} num - the number of items to include
 * @returns {[]}
 */
export default function getFirstXFromArray(arr, num) {
  return arr.slice(0, num);
}
