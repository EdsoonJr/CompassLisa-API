const { Router } = require('express');
const carRouter = require('./carRoute.js');
const peopleRouter = require('./peopleRoute.js')

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router())
    next();
  });
};