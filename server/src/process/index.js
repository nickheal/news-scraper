import averageWordLength from './reports/averageWordLength';
import mostFrequentWords from './reports/mostFrequentWords';

/**
 * This is a list of all the processors to run
 */
const processors = [{
  func: averageWordLength,
  id: 'averageWordLength'
}, {
  func: mostFrequentWords,
  id: 'mostFrequentWords'
}];

/**
 * This function runs every processor on the html provided
 * @param {string} html - the html to process
 * @returns {object}
 */
export default (html) => {
  return processors.map((processor) => ({
    ...processor,
    result: processor.func(html)
  }))
};
