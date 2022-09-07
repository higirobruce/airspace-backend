const mongoose = require("mongoose");
const ClearanceTypesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
});
module.exports = {
  model: mongoose.model("Clearance_Types", ClearanceTypesSchema),
  schema: ClearanceTypesSchema,
};
