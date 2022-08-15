exports.findAll = (model) => model.find();

exports.findOne = (model, id) => model.findById(id);

exports.create = (model, newData) => {
    const item = new model(newData);
    return item.save();
};

exports.update = (model, id, updateData) => model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = (model, id) => model.findByIdAndRemove(id);
