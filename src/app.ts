import 'express-async-errors';
import * as express from "express";


import routes from './routes';
const app = express();

// *************** MIDDLEWARES *************** \
app.use(express.json());

// *************** ROUTES *************** \\
app.use(routes);

app.use((_, res) => {
  res.status(404).json({
    message:
      'Ohh you are lost, read the API documentation to find your way back home :)',
  });
});
export default app;
