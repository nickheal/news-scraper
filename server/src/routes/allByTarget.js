import scrape from '../scrape';

export default async function all(req, res) {
  res.json(await scrape());
}
