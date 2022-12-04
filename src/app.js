const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();
require('./api/models/user');

const middlewares = require('./middlewares');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎 Welcome REST API 🌍🌏✨🌈🦄',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
