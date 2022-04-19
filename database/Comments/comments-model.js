const mongoose = require('mongoose');
const tuitsSchema = require('./comments-schema');
const tuitsModel = mongoose.model(
  "TuitsModel", tuitsSchema);
module.exports = tuitsModel;