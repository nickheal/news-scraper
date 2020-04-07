export default function stripSpecialCharacters(result) {
  return result.reduce((acc, word) => {
    const finalString = word
      .replace(/[^a-zA-Z]/gi, '')
      .toLowerCase();
    if (finalString.length) {
      return [...acc, finalString]
    }
    return acc;
  }, []);
}
