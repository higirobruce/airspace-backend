const mongoose = require("mongoose");
const PermitSchema = new mongoose.Schema({
  approvalNumber: {
    type: String,
  },
  operatorId: {
    type: mongoose.SchemaTypes.ObjectId,
    transform: (v) => (v === "" ? null : v),
    ref: "Operator",
  },
  aircraftId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Aircraft",
  },
  substituteAircrafts: {
    type: mongoose.SchemaTypes.Array,
    transform: (v) => (v === "" ? null : v),
    ref: "Aircraft",
  },
  permitStatus: {
    type: String,
  },
  invoices: {
    type: mongoose.SchemaTypes.Array,
  },
  flightRoutes: {
    type: mongoose.SchemaTypes.Array,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: String,
    required: true,
  },
  permit: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  messages: {
    type: mongoose.SchemaTypes.Array,
  },
  agency: {
    type: String,
    required: true,
  },
});

module.exports = {
  model: mongoose.model("Permit", PermitSchema),
  schema: PermitSchema,
};
