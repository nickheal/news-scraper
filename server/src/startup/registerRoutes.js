import allByReport from '../routes/allByReport';
import allByTarget from '../routes/allByTarget';

export default function registerRoutes(app) {
  app.get('/api/allByReport', allByReport);
  app.get('/api/allByTarget', allByTarget);
}
