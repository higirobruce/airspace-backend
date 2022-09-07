const mongoose = require("mongoose");
const PermitTypesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
});
module.exports = {
  model: mongoose.model("Permit_Types", PermitTypesSchema),
  schema: PermitTypesSchema,
};
