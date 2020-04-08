export default function formatSentiments(sentiments) {
  const {
    ResultList
  } = sentiments;

  return ResultList
    .map(({ SentimentScore }) => SentimentScore)
    .reduce(({
      positive: accPositive,
      negative: accNegative,
      neutral: accNeutral,
      mixed: accMixed
    }, {
      Positive: currentPositive,
      Negative: currentNegative,
      Neutral: currentNeutral,
      Mixed: currentMixed
    }, _, arr) => ({
      positive: accPositive + (currentPositive / arr.length),
      negative: accNegative + (currentNegative / arr.length),
      neutral: accNeutral + (currentNeutral / arr.length),
      mixed: accMixed + (currentMixed / arr.length)
    }), {
      positive: 0,
      negative: 0,
      neutral: 0,
      mixed: 0
    });
}
