const Test = require('../../model/labtest');
const service = require('./labtest-card.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll()
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(req.params.id)
        .then( test => {
            if (!test) {
                return next(new createError.NotFound("Test is not found"));
            }
            return res.json(test);
        });
};
