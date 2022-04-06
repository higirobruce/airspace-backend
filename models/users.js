const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
    required: true,
  },
  names: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
  },
  agencyWebsite: {
    type: String,
  },
  status: {
    type: String,
    default: "inactive",
  },
  accountType: {
    type: String,
    required: true,
    default: "operator",
  },
});

module.exports = {
  model: mongoose.model("User", UserSchema),
  schema: UserSchema,
};
