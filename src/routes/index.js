const { Router } = require('express');
const carRouter = require('./carRoute');
const peopleRouter = require('./peopleRoute');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router());
    next();
  });
};