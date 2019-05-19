const mongoose = require('mongoose');

const { Schema } = mongoose;

const StationsSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
    minlength: 3,
  },
});


module.exports = mongoose.model('Stations', StationsSchema);
