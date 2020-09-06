const express = require('express');
const quote = require('./routes/quote');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/quote', quote);

app.use(errorHandler);

module.exports = app;
