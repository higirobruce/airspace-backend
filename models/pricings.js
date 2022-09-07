const mongoose = require("mongoose");
const PricingsSchema = new mongoose.Schema({
  pricingCode: {
    type: String,
  },
  applicationFees: {
    type: Object,
  },
});
module.exports = {
  model: mongoose.model("pricing", PricingsSchema),
  schema: PricingsSchema,
};
