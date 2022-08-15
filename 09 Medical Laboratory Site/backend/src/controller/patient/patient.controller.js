const service = require('./patient.service');
const createError = require('http-errors');


exports.findAll = (req, res, next) => {
    return service.findAll()
        .then(list => res.json(list));
};

exports.findOne = (req, res, next) => {
    return service.findOne(req.params.id)
        .then( patient => {
            if (!patient) {
                return next(new createError.NotFound("Patient is not found"));
            }
            return res.json(patient);
        });
};

exports.create = (req, res, next) => {
    const { name, taj, birth_date, mothers_name } = req.body;
    if (!taj || !name || !birth_date || !mothers_name) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPatient = {
        name: name,
        taj: taj,
        birth_date: birth_date,
        mothers_name: mothers_name
    };    

    return service.create(newPatient)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { name, taj, birth_date,  mothers_name } = req.body;
    if (!taj || !name || !birth_date || !mothers_name) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name: name,
        taj: taj,
        birth_date: birth_date,
        mothers_name: mothers_name
    };
    return service.update(req.params.id, update)
        .then(patient => {
            res.json(patient);
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

exports.patientNames = async (req, res, next) => {
    const patients = await service.findAll()
    let patientsName = [];
    patients.forEach(patient => {
        patientsName.push(patient.name);

    });
    res.json(patientsName)
};
