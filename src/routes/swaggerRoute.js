const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const compassLisaDoc = require('../../CompassLisaDoc.json');

router.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(compassLisaDoc));

module.exports = router;
