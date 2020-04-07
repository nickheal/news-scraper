import scrape from '../scrape';
import invert from '../process/invert';

export default async function all(req, res) {
  const result = null
    |> await scrape(#)
    |> invert;

  res.json(result);
}
