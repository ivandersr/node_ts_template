// src/routes/index.ts
import express from 'express';
import routes from './routes';

const app = express();

const port = 3333;

app.use(routes);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
});
