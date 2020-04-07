/**
 * Strips the special characters from each word in an array
 * @param {string[]} words - all the words
 * @returns {string[]}
 */
export default function stripSpecialCharacters(words) {
  return words.reduce((acc, word) => {
    const finalString = word
      .replace(/[^a-zA-Z]/gi, '')
      .toLowerCase();
    if (finalString.length) {
      return [...acc, finalString]
    }
    return acc;
  }, []);
}
