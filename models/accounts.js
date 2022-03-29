const mongoose = require("mongoose");
const AccountSchema = new mongoose.Schema({});

module.exports = {
  model: mongoose.model("Account", AccountSchema),
  schema: AccountSchema,
};
