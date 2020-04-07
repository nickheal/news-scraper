/**
 * Gets the words from an array of sentences
 * @param {string[]} sentences - all the sentences
 * @returns {string[]}
 */
export default function getWords(sentences) {
  return sentences.map((sentence) => 
    sentence
      .split(' ')
  ).flat();
}
