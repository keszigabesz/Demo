const logger = require('../../config/logger');

exports.count = async (model) => {
const count = await model.countDocuments({});
      return  count;
};