/**
 * Strips non-sentences from an array of sentences
 * @param {string[]} sentences - all the sentences
 * @returns {string[]}
 */
export default function stripNonSentences(sentences) {
  return sentences.reduce((acc, sentence) => {
    const finalString = sentence
      .replace(/\s\s+/gi, ' ')
      .replace(/\n/gi, '')
      .replace(/\r/gi, '')
      .replace(/\t/gi, '')
      .trim();
    if (finalString.length > 1) {
      return [...acc, finalString]
    }
    return acc;
  }, []);
}
