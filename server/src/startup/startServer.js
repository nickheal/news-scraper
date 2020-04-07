import express from 'express';
import cors from 'cors';

export default () => {
  const app = express();
  const port = 2700;

  const whitelist = [
    /** UI */
    'http://localhost:3000',
  ];
  app.use(cors({
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }));

  app.use(express.json());

  app.listen(port, () => console.log(`Server listening on port ${port}!`));

  return app;
};
