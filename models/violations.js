const mongoose = require("mongoose");
const ViolationSchema = new mongoose.Schema({
  aircraft: {
    type: String,
  },
  flightType: {
    type: String,
  },
  operator: {
    type: String,
  },
  registrationNumber: {
    type: String,
  },
  mtow: {
    type: String,
  },
  homebase: {
    type: String,
  },
  pilotNames: {
    type: String,
  },
  pilotLicenseNumber: {
    type: String,
  },
  entryPoint: {
    type: String,
  },
  exitPoint: {
    type: String,
  },
  entryDate: {
    type: mongoose.SchemaTypes.Date,
  },
  exitDate: {
    type: mongoose.SchemaTypes.Date,
  },
});

module.exports = {
  model: mongoose.model("Violation", ViolationSchema),
  schema: ViolationSchema,
};
