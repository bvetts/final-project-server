const mongoose = require('mongoose');
const orgSchema = require('./org-schema');
const orgModel = mongoose.model(
  "OrgModel", orgSchema);
module.exports = orgModel;