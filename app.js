const express = require('express');
const quote = require('./routes/quote');
const anyRoute = require('./routes/any');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/quote', quote);

app.use('*', anyRoute);

app.use(errorHandler);

module.exports = app;
