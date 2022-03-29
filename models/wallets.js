const mongoose = require("mongoose");
const WalletSchema = new mongoose.Schema({});

module.exports = {
  model: mongoose.model("Wallet", WalletSchema),
  schema: WalletSchema,
};
