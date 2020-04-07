export default function stripWordsShorterThanX(words, length) {
  return words.filter(({ word }) => word.length >= length);
}
