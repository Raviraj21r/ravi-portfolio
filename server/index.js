import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { sendContactEmail } from './contact.js';

const app = express();
const port = Number(process.env.PORT) || 3000;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(currentDirectory, '..');
const distDirectory = path.join(projectDirectory, 'dist');

app.use(express.json({ limit: '10kb' }));

app.post(
  '/api/contact',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
  }),
  async (req, res) => {
    const result = await sendContactEmail(req.body);
    return res.status(result.status).json(result.body);
  },
);

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API route not found.' });
});

app.use(express.static(distDirectory));
app.get(/.*/, (_req, res, next) => {
  res.sendFile(path.join(distDirectory, 'index.html'), (error) => {
    if (error) next();
  });
});

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
