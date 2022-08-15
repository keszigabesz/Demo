const Physician = require('../../model/physician');

exports.findAll = () => Physician.find();

exports.findOne = (id) => Physician.findById(id);

exports.create = (newData) => {
    const item = new Physician(newData);
    return item.save();
};

exports.update = (id, updateData) => Physician.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Physician.findByIdAndRemove(id);
