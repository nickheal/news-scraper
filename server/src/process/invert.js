/**
 * Takes scrapes done by target, and reorganises them to be by report
 * @param {object[]} allScrapes 
 * @returns {object[]}
 */
export default function invert(allScrapes) {
  if (!allScrapes?.length) return [];
  const allReports = allScrapes[0].reports.map(({ id }) => id);
  return allReports.map((report) => ({
    id: report,
    targets: allScrapes.map((scrape) => ({
      id: scrape.id,
      result: scrape.reports.find(({ id }) => report === id).result
    }))
  }));
};
