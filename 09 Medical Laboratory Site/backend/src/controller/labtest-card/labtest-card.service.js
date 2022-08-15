const Test = require('../../model/labtest');

exports.findAll = () => Test.find();

exports.findOne = (id) => Test.findById(id);