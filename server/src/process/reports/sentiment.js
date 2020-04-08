import { JSDOM } from 'jsdom';
import getElements from './common/getElements';
import fetchSentiments from './common/fetchSentiments';
import formatSentiments from './common/formatSentiments';
import getSentences from './common/getSentences';
import groupSentencesUpTo5000 from './common/groupSentencesUpTo5000';
import stripNonSentences from './common/stripNonSentences';

/**
 * Get the most frequent words from an HTML page
 * @param {string} html - the html to process
 */
export default async (html) => {
  const { window: { document: { body } } } = new JSDOM(html);
  return body
    |> getElements
    |> getSentences
    |> stripNonSentences
    |> groupSentencesUpTo5000
    |> await fetchSentiments(#)
    |> formatSentiments;
};
