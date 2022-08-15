const Sample = require('../../model/sample');

exports.findAll = () => Sample.find();

exports.findOne = (id) => Sample.findById(id);

exports.create = (newData) => {
    const item = new Sample(newData);
    return item.save();
};

exports.update = (id, updateData) => Sample.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Sample.findByIdAndRemove(id);
