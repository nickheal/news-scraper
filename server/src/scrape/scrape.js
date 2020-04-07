import superagent from 'superagent';
/**
 * This function handles getting the html from the site
 * @param {string} path - the url to scrape
 */
export default async (path) => {
  const result = await superagent
    .get(path);
  return result.text;
};
