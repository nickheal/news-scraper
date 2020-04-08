import process from '../process';
import scrape from './scrape';
import targets from './targets';

/**
 * Scrapes all the targets in the argument
 * @param {Object[]} targets - all the targets to be scraped
 * @returns {Object[]}
 */
async function scrapeAll(targets) {
  return await Promise.all(targets.map(async ({ id, path }) => ({
    id,
    html: await scrape(path)
  })));
}

/**
 * Processes all the scraped html
 * @param {Object[]} scrapes - all the scraped html
 * @returns {Object[]}
 */
async function processAll(scrapes) {
  return Promise.all(scrapes.map(async ({ id, html }) => ({
    id,
    reports: await process(html)
  })));
}

/**
 * This function handles getting all the data
 * @returns {object[]}
 */
export default async () => {
  return targets
    |> await scrapeAll(#)
    |> await processAll(#);
};
