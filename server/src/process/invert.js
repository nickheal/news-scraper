export default (allScrapes) => {
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
