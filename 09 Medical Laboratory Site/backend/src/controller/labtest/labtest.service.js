const Test = require('../../model/labtest');

exports.findAll = () => Test.find();

exports.findOne = (id) => Test.findById(id);

exports.create = (newData) => {
    const item = new Test(newData);
    return item.save();
};

exports.update = (id, updateData) => Test.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Test.findByIdAndRemove(id);
