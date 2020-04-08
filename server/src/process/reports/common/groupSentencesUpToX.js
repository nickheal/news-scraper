export default function groupSentencesUpTo5000(sentences, length) {
  return sentences.reduce((acc, sentence) => {
    if (sentence.length > length) throw new Error(`Sentence too long to fit within ${length} characters!`);

    const newSentence = `${sentence}.`;
    if (!acc) return [newSentence];

    const lastSentence = acc.pop();
    const potentialNewString = `${lastSentence} ${newSentence}`;
    if (potentialNewString.length > length) {
      return [...acc, lastSentence, newSentence];
    }
    return [...acc, potentialNewString];
  }, null);
}
