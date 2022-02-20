const { Router } = require('express');
const carRouter = require('./carRoute');
const peopleRouter = require('./peopleRoute');
const authRouter = require('./authRoute');
const rentalRouter = require('./rentalRoute');
const swaggerRouter = require('./swaggerRoute');

module.exports = (server) => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peopleRouter(server, new Router());
    authRouter(server, new Router());
    rentalRouter(server, new Router());
    server.use(swaggerRouter, new Router());
    next();
  });
};
