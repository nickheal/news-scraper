export default function getWords(result) {
  return result.map((sentence) => 
    sentence
      .split(' ')
  ).flat();
}