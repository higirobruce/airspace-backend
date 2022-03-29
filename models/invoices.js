const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({});
module.exports = {
  model: mongoose.model("Invoice", InvoiceSchema),
  schema: InvoiceSchema,
};
