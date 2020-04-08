import getBinarySize from './getBinarySize';

/**
 * Groups sentences up to a supplied maximum length (in bytes)
 * @param {string[]} sentences 
 * @param {number} length 
 * @returns {string[]}
 */
export default function groupSentencesUpToX(sentences, length) {
  return sentences.reduce((acc, sentence) => {
    if (getBinarySize(sentence) > length) throw new Error(`Sentence too long to fit within ${length} characters!`);

    const newSentence = `${sentence}.`;
    if (!acc) return [newSentence];

    const lastSentence = acc.pop();
    const potentialNewString = `${lastSentence} ${newSentence}`;
    if (getBinarySize(potentialNewString) > length) {
      return [...acc, lastSentence, newSentence];
    }
    return [...acc, potentialNewString];
  }, null);
}
