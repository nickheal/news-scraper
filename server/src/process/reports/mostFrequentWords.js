import { JSDOM } from 'jsdom';
import getElements from './common/getElements';
import getFirst10FromArray from './common/getFirst10FromArray';
import getMostFrequentWords from './common/getMostFrequentWords';
import getSentences from './common/getSentences';
import getWords from './common/getWords';
import stripSpecialCharacters from './common/stripSpecialCharacters';
import stripWordsShorterThan4 from './common/stripWordsShorterThan4';

/**
 * Get the most frequent words from an HTML page
 * @param {string} html - the html to process
 */
export default (html) => {
  const { window: { document: { body } } } = new JSDOM(html);
  return body
    |> getElements
    |> getSentences
    |> getWords
    |> stripSpecialCharacters
    |> getMostFrequentWords
    |> stripWordsShorterThan4
    |> getFirst10FromArray;
};
