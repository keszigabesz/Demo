const service = require('./labtest.service');
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

exports.create = (req, res, next) => {
    const { name, price, point, description } = req.body;
    if (!name || !price || !point || !description) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newTest = {
        name: name,
        price: price,
        point: point,
        description: description
    };    

    return service.create(newTest)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, price, point, description } = req.body;
    if (!name || !price || !point || !description) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        price: price,
        point: point,
        description: description
    };
    return service.update(req.params.id, update)
        .then(test => {
            res.json(test);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};


exports.delete = (req, res, next) => {
    return service.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
