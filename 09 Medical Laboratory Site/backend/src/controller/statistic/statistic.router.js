const express = require('express');
const controller = require('./statistic.controller');
const logger = require('../../config/logger');

const router = express.Router();

router.get('/patient-count', (req, res, next) => {
  logger.info('GET /patient-count');
  return controller.countPatient(req, res, next);
});
router.get('/physician-count', (req, res, next) => {
  logger.info('GET /physician-count');
  return controller.countPhysician(req, res, next);
});
router.get('/reagent-count', (req, res, next) => {
  logger.info('GET /reagent-count');
  return controller.countReagent(req, res, next);
});
router.get('/sample-count', (req, res, next) => {
  logger.info('GET /sample-count');
  return controller.countSample(req, res, next);
});
router.get('/test-count', (req, res, next) => {
  logger.info('GET /test-count');
  return controller.countTest(req, res, next);
});

router.get('/city-count', (req, res, next) => {
  logger.info('GET /city-count');
  return controller.countCity(req, res, next);
});

module.exports = router;