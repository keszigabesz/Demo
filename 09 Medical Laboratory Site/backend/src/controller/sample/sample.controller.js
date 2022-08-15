const service = require('./sample.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll()
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(req.params.id)
        .then( sample => {
            if (!sample) {
                return next(new createError.NotFound("Sample is not found"));
            }
            return res.json(sample);
        });
};

exports.create = (req, res, next) => {
    const { type, patient_name, physician_name, sampling_date } = req.body;
    if (!type || !patient_name || !physician_name || !sampling_date) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newSample = {
        type: type,
        patient_name: patient_name,
        physician_name: physician_name,
        sampling_date: sampling_date
    };    

    return service.create(newSample)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { type, patient_name, physician_name, sampling_date } = req.body;
    if (!type || !patient_name || !physician_name || !sampling_date) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        type: type,
        patient_name: patient_name,
        physician_name: physician_name,
        sampling_date: sampling_date
    };
    return service.update(req.params.id, update)
        .then(sample => {
            res.json(sample);
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
