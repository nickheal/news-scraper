import { Comprehend } from 'aws-sdk';
import getFirst25FromArray from './getFirst25FromArray';

const mock = {
  ResultList: [{
    Index: '0',
    Sentiment: 'NEUTRAL',
    SentimentScore: {
      Positive: 0.036191437393426895,
      Negative: 0.0004903824301436543,
      Neutral: 0.9633144736289978,
      Mixed: 0.0000036669916880782694
    }
  }, {
    Index: 1,
    Sentiment: 'NEUTRAL',
    SentimentScore: {
      Positive: 0.06356601417064667,
      Negative: 0.001559337368234992,
      Neutral: 0.934859573841095,
      Mixed: 0.000015006472494860645
    }
  }],
  ErrorList: []
}

/**
 * Fetches the 'sentiments' from a group of strings from AWS Comprehend API
 * @param {string[]} groups - an array of strings
 * @returns {Object}
 */
export default async function fetchSentiments(groups) {
  return new Promise((resolve, reject) => {
    resolve(mock);
    // const comprehend = new Comprehend();
    // comprehend.batchDetectSentiment({
    //   LanguageCode: 'en',
    //   TextList: getFirst25FromArray(groups)
    // }, (err, data) => {
    //   if (err) return reject(err);
    //   return resolve(data);
    // });
  });
}
