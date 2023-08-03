const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true })); // читать данные из тела запросов
  app.use(express.json()); // читать JSON-данные из тела запросов
};

module.exports = serverConfig;
