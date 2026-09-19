import express, { type Request, type Response, Router } from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

// const router = Router();
// router.get('/hello', (req, res) => res.send('hello world'));

app.put('contact', (req: Request, res: Response) => {
  res.json({
    query: req.query,
    body: req.body,
    params: req.params,
    message: 'hello world',
  });
});

// app.use('/api/', router);

export const handler = serverless(app);
