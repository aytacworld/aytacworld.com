import cors from 'cors';
import express, { type NextFunction, type Request, type Response, Router } from 'express';
import { body } from 'express-validator';
import helmet from 'helmet';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());
app.use(cors({ origin: ['https://aytacworld.com', 'https://beta-aytacworld-com.netlify.app'] }));
app.use(helmet());

const router = Router();
router.get('/hello', (req, res) => res.send('hello world'));

router.put(
  '/contact',
  body('name').notEmpty().isString(),
  body('email').notEmpty().isEmail(),
  body('company').isString(),
  body('message').notEmpty().isString(),
  (req: Request, res: Response) => {
    res.status(200).json({status:'ok'});
  },
);

app.use('/api/', router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('oeps, not found');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export const handler = serverless(app);
