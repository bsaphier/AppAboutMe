const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const staticMiddleware = require('./static.middleware');

const app = express();
const logger = morgan('dev');

app.use(logger);

app.use(staticMiddleware);

app.set('port', (process.env.PORT || 1337));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// error handling middleware
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  error.message = error.message || 'Internal Error';
  res.status(error.status).send(error.message);
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});


module.exports = app;
