function sum(acc = 0, val = 0) {
  return acc + val;
}

export default function getAverageWordLength(words) {
  return words
    .map(word => word.length)
    .reduce(sum) / words.length;
}
