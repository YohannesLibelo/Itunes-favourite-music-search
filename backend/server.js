const express = require('express');
const itunes = require('./itunes');
const helmet = require('helmet');

const app = express();

// Apply Helmet middleware
app.use(helmet());

// Configure Content Security Policy using helmet.contentSecurityPolicy middleware
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      // Add more directives as needed
    },
  })
);

// Configure HTTP Strict Transport Security using helmet.hsts middleware
const ninetyDaysInSeconds = 90 * 24 * 60 * 60 * 1000;
app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    includeSubDomains: true,
    preload: true,
  })
);

const port = 8080;

app.use(express.json());

app.get('/search', async (req, res) => {
  const { term, mediaType } = req.query;

  try {
    const results = await itunes.searchMedia(term, mediaType);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
