const mongoose = require('mongoose');

const PhysicianSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  reg_number: {
    type: Number,
    require: true
  },
  city: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  collection: 'physicians',
})

module.exports = mongoose.model('Physician', PhysicianSchema);