/**
 * Formats the sentiments from the AWS Comprehend API in to a simple format
 * @param {Object} sentiments 
 * @param {Object[]} sentiments.ResultList
 * @param {number} sentiments.ResultList[].index
 * @param {string} sentiments.ResultList[].Sentiment
 * @param {object} sentiments.ResultList[].SentimentScore
 * @param {number} sentiments.ResultList[].SentimentScore.Positive
 * @param {number} sentiments.ResultList[].SentimentScore.Negative
 * @param {number} sentiments.ResultList[].SentimentScore.Neutral
 * @param {number} sentiments.ResultList[].SentimentScore.Mixed
 * @param {[]} sentiments.ErrorList
 * @returns {Object}
 */
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
