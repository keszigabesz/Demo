const express = require('express');
const controller = require('./physician.controller');
const logger = require('../../config/logger');

const router = express.Router();


router.get('/', (req, res, next) => {
  logger.info('GET /physician-names');
  return controller.physicianNames(req, res, next);
});



module.exports = router;