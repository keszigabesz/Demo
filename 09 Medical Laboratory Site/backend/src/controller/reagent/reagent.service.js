const Reagent = require('../../model/reagent');

exports.findAll = () => Reagent.find();

exports.findOne = (id) => Reagent.findById(id);

exports.create = (newData) => {
    const item = new Reagent(newData);
    return item.save();
};

exports.update = (id, updateData) => Reagent.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (id) => Reagent.findByIdAndRemove(id);
