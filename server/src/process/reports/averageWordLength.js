import { JSDOM } from 'jsdom';
import getAverageWordLength from './common/getAverageWordLength';
import getElements from './common/getElements';
import getSentences from './common/getSentences';
import getWords from './common/getWords';
import stripSpecialCharacters from './common/stripSpecialCharacters';

/**
 * Gets the average word length from a page
 * @param {string} html - the html to process
 */
export default (html) => {
  const { window: { document: { body } } } = new JSDOM(html);
  return body
    |> getElements
    |> getSentences
    |> getWords
    |> stripSpecialCharacters
    |> getAverageWordLength;
};
