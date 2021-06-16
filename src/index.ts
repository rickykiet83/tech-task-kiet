import express from 'express';
import authMiddleware from './middleware/auth.middleware';
const app: express.Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/status', (req, res) => { res.status(200).end(); });
app.head('/status', (req, res) => { res.status(200).end(); });

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('hello');
});

app.get('/basic-auth', authMiddleware.verifyUserPassword, (req: express.Request, res: express.Response) => {
  res.status(200).end('welcome');
});

export const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

