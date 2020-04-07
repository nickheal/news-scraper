export default function getMostFrequentWords(result) {
  return result
    .reduce((acc, currentWord) => {
      const existingWord = acc.find(({ word }) => word === currentWord);
      if (!existingWord) {
        return [...acc, {
          word: currentWord,
          count: 1
        }];
      }
      const index = acc.indexOf(existingWord);
      acc.splice(index, 1, {
        word: currentWord,
        count: existingWord.count + 1
      });
      return acc;
    }, [])
    .sort((a, b) => b.count - a.count);
}
