/**
 * Gets the binary size of a string
 * @param {string} string 
 * @returns {number}
 */
export default function getBinarySize(string) {
  return Buffer.byteLength(string, 'utf8');
}
