const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  point: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  tollection: 'tests',
})

module.exports = mongoose.model('Test', TestSchema);