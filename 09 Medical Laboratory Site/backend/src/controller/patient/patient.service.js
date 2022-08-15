const Patient = require('../../model/patient');

exports.findAll = () => Patient.find();

exports.findOne = (id) => Patient.findById(id);

exports.create = (newData) => {
    const item = new Patient(newData);
    return item.save();
};

exports.update = (id, updateData) => Patient.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Patient.findByIdAndRemove(id);
