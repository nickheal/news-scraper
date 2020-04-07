import process from '../process';
import scrape from './scrape';

const targets = [{
  id: 'bbc',
  path: 'https://www.bbc.co.uk/'
}, {
  id: 'buzzfeed',
  path: 'https://www.buzzfeed.com/'
}, {
  id: 'financial-times',
  path: 'https://www.ft.com/'
}, {
  id: 'guardian',
  path: 'https://www.theguardian.com/uk'
}, {
  id: 'heat',
  path: 'https://heatworld.com/'
}, {
  id: 'reddit',
  path: 'https://www.reddit.com/'
}];

/**
 * Scrapes all the targets in the argument
 * @param {object[]} targets - all the targets to be scraped
 * @returns {object[]}
 */
async function scrapeAll(targets) {
  return await Promise.all(targets.map(async ({ id, path }) => ({
    id,
    html: await scrape(path)
  })));
}

/**
 * Processes all the scraped html
 * @param {object[]} scrapes - all the scraped html
 * @returns {object[]}
 */
function processAll(scrapes) {
  return scrapes.map(({ id, html }) => ({
    id,
    reports: process(html)
  }));
}

/**
 * This function handles getting all the data
 * @return {object[]}
 */
export default async () => {
  return targets
    |> await scrapeAll(#)
    |> processAll;
};
