const mongoose = require('mongoose');

const SampleSchema = mongoose.Schema({
  type: {
    type: String,
    require: true
  },
  patient_name: {
    type: String,
    require: true
  },
  physician_name: {
    type: String,
    require: true
  },
  sampling_date: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  sollection: 'samples',
})

module.exports = mongoose.model('Sample', SampleSchema);