require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const healthRouter = require('./routes/health');
const profileRouter = require('./routes/profile');
const skillsRouter = require('./routes/skills');
const portfolioRouter = require('./routes/portfolio');
const contactRouter = require('./routes/contact');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const port = Number(process.env.PORT) || 4000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(
  cors({
    origin: corsOrigin.split(',').map((value) => value.trim()),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.get('/', (_req, res) => {
  res.json({
    success: true,
    data: {
      name: 'portfolio-server',
      version: '0.1.0',
      endpoints: [
        'GET /api/health',
        'GET /api/profile',
        'GET /api/skills',
        'GET /api/portfolio',
        'GET /api/portfolio/:slug',
        'POST /api/portfolio',
        'GET /api/contact',
        'POST /api/contact',
      ],
    },
  });
});

app.use('/api/health', healthRouter);
app.use('/api/profile', profileRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/contact', contactRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`portfolio-server listening on http://localhost:${port}`);
});
