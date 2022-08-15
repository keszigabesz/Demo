const mongoose = require('mongoose');

const ReagentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  manufacturer: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  collection: 'reagents',
})

module.exports = mongoose.model('Reagent', ReagentSchema);