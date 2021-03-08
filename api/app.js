require('dotenv').config();

const mongoose = require('mongoose');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

require('./config/db.config');

const app = express();

/**
 * Middlewares
 */
app.use(express.json())
app.use(logger('dev'));

/**
 * Configure routes
 */
const router = require('./config/routes.config');
app.use('/api', router);

app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.ValidationError) error = createError(400, error)
  else if (error instanceof mongoose.Error.CastError) error = createError(404, 'Resource not found')

  console.error(error);

  res.status(error.status || 500);
  const data = {}
  data.message = error.message;
  data.errors = error.errors ?
    Object.keys(error.errors)
      .reduce((errors, key) => ({ ...errors, [key]: error.errors[key].message }), {}) :
    undefined;

  res.json(data);
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Ready! Listening on port ${port}`);
});
