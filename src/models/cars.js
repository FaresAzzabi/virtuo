const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarsSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
    minlength: 3,
  },
  available: {
    type: Boolean,
    required: true,
  },
  station: {
    type: Schema.Types.ObjectId,
    ref: 'Stations',
    required: true,
  },
});


module.exports = mongoose.model('Cars', CarsSchema);
