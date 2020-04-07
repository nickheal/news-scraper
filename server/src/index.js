import 'core-js/stable';
import 'regenerator-runtime/runtime';
import startServer from './startup/startServer';
import registerRoutes from './startup/registerRoutes';

const app = startServer();
registerRoutes(app);

export default app;
