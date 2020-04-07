/**
 * Filters empty elements out of an array
 * @param {[]} arr - an array to filter
 * @returns {[]}
 */
export default function filterEmpty(arr) {
  return arr.filter(_ => !!_);
}
