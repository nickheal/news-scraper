import averageWordLength from './reports/averageWordLength';
import mostFrequentWords from './reports/mostFrequentWords';
import sentiment from './reports/sentiment';

/**
 * This is a list of all the processors to run
 */
const processors = [{
  func: averageWordLength,
  id: 'averageWordLength'
}, {
  func: mostFrequentWords,
  id: 'mostFrequentWords'
}, {
  func: sentiment,
  id: 'sentiment'
}];

/**
 * This function runs every processor on the html provided
 * @param {string} html - the html to process
 * @returns {object}
 */
export default async (html) => {
  return Promise.all(processors.map(async (processor) => ({
    ...processor,
    result: await processor.func(html)
  })))
};
