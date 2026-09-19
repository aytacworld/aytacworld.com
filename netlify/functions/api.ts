import cors from 'cors';
import express, { type Request, type Response, Router } from 'express';
import { body } from 'express-validator';
import helmet from 'helmet';
import serverless from 'serverless-http';
import mail from '../../server/mail';

const app = express();

app.use(express.json());
app.use(cors({ origin: ['https://aytacworld.com', 'https://beta-aytacworld-com.netlify.app'] }));
app.use(helmet());

const router = Router();
router.get('/hello', (_, res) => res.send('hello world'));

router.put(
  '/contact',
  body('name').notEmpty().isString(),
  body('email').notEmpty().isEmail(),
  body('company').isString(),
  body('message').notEmpty().isString(),
  async (req: Request, res: Response) => {
    const status = await mail.send(req.body);

    res.status(200).json({ status });
  },
);

app.use('/api/', router);

app.use((_: Request, res: Response) => {
  res.status(404).send('oeps, not found');
});

app.use((err: Error, _: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export const handler = serverless(app);
