import formatSentiments from 'src/process/reports/common/formatSentiments';

describe('formatSentiments', () => {
  test('It should take the sentiment response from AWS and format to just the accumulated scores', () => {
    const sentiments = {
      ResultList: [{
        Index: '0',
        Sentiment: 'NEUTRAL',
        SentimentScore: {
          Positive: 0.5,
          Negative: 0.25,
          Neutral: 0.1,
          Mixed: 0.15
        }
      }, {
        Index: 1,
        Sentiment: 'NEUTRAL',
        SentimentScore: {
          Positive: 0.75,
          Negative: 0.05,
          Neutral: 0,
          Mixed: 0.2
        }
      }],
      ErrorList: []
    }

    const result = sentiments
      |> formatSentiments;

    expect(result).toEqual({
      positive: 0.625,
      negative: 0.15,
      neutral: 0.05,
      mixed: 0.175
    });
  });
});
