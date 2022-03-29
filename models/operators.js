const mongoose = require("mongoose");

const OperatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  caoIdentifier: {
    type: String,
    required: true,
  },
  iataIdentifier: {
    type: String,
    required: true,
  },
  nationalCarrier: {
    type: String,
    required: true,
  },
  operationsEmail: {
    type: String,
    required: true,
  },
  operationPhone: {
    type: String,
    required: true,
  },
  accountManagerName: {
    type: String,
    required: true,
  },
  accountManagerPhone: {
    type: String,
    required: true,
  },
  accountManagerEmail: {
    type: String,
    required: true,
  },
  operationManagerName: {
    type: String,
    required: true,
  },
  operationManagerPhone: {
    type: String,
    required: true,
  },
  operationManagerEmail: {
    type: String,
    required: true,
  },
  vatCertExpDate: {
    type: mongoose.SchemaTypes.Date,
  },
  airOpCertExpDate: {
    type: mongoose.SchemaTypes.Date,
  },
  agency: {
    type: String,
    required: true,
  },
});

module.exports = {
  model: mongoose.model("Operator", OperatorSchema),
  schema: OperatorSchema,
};
