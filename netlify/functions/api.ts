import express, { type Request, type Response } from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

app.put('contact', (req: Request, res: Response) => {
  res.json({
    query: req.query,
    body: req.body,
    params: req.params,
    message: 'hello world',
  });
});

export const handler = serverless(app);
