const express = require('express');
const controller = require('./patient.controller');
const logger = require('../../config/logger');

const router = express.Router();

router.get('/', (req, res, next) => {
  logger.info('GET /patient-names');
  return controller.patientNames(req, res, next);
});


module.exports = router;