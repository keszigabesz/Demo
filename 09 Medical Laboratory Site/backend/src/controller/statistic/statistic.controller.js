const Patient = require('../../model/patient');
const Physician = require('../../model/physician');
const Reagent = require('../../model/reagent');
const Sample = require('../../model/sample');
const Test = require('../../model/labtest');
const statService = require('./statistic.service');

const service = require('../base/base.service');

exports.countPatient = async (req, res, next) => {
    return statService.count(Patient)
        .then(count => res.json(count));
};
exports.countPhysician = async (req, res, next) => {
    return statService.count(Physician)
        .then(count => res.json(count));
};
exports.countReagent = async (req, res, next) => {
    return statService.count(Reagent)
        .then(count => res.json(count));
};
exports.countSample = async (req, res, next) => {
    return statService.count(Sample)
        .then(count => res.json(count));
};
exports.countTest = async (req, res, next) => {
    return statService.count(Test)
        .then(count => res.json(count));
};
exports.countCity = async (req, res, next) => {
    const physicians = await service.findAll(Physician)
    let city = [];
    physicians.forEach(physician => {
        city.push(physician.city);

    });
    const distinctCities = [...new Set(city)]
    res.json(distinctCities.length)
}