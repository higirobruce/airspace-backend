const mongoose = require("mongoose");
const operatorDataModel = require("../models/operators");
const AircraftSchema = new mongoose.Schema({
  operatorId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Operator",
  },
  registration: {
    type: String,
    required: true,
  },
  aircraftModel: {
    type: String,
    required: true,
  },
  mtow: {
    type: String,
    required: true,
  },
  aircraftType: {
    type: String,
    required: true,
  },
  homebase: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  manufactureYear: {
    type: Number,
    required: true,
  },
  noteToCaa: {
    type: String,
    required: true,
  },
  certAirWorthExpDate: {
    type: mongoose.SchemaTypes.Date,
  },
  certInsuranceExpDate: {
    type: mongoose.SchemaTypes.Date,
  },
  certNoiseExpDate: {
    type: mongoose.SchemaTypes.Date,
  },
  agency: {
    type: String,
    required: true,
  },
});

module.exports = {
  model: mongoose.model("Aircraft", AircraftSchema),
  schema: AircraftSchema,
};
