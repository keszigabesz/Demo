const express = require('express');
const controller = require('./reagent.controller');
const logger = require('../../config/logger');

const router = express.Router();


router.get('/', (req, res, next) => {
  logger.info('GET /reagent');
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  logger.info('GET /reagent/:id');
  return controller.findOne(req, res, next);
});

router.post('/', (req, res, next) => {
  logger.info('POST /reagent');
  return controller.create(req, res, next);
});

router.put('/:id', (req, res, next) => {
  logger.info('PUT /reagent/:id');
  return controller.update(req, res, next);
});

router.delete('/:id', (req, res, next) => {
  logger.info('DELETE /reagent/:id');
  return controller.delete(req, res, next);
});

module.exports = router;