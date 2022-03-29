const mongoose = require("mongoose");
const TransactionSchema = new mongoose.Schema({});

module.exports = {
  model: mongoose.model("Transaction", TransactionSchema),
  schema: TransactionSchema,
};
