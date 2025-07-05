const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  fullName: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  gender: { type: String },
  isVerified: { type: String },
  noticeOfEvent: { type: String },
  firstTime: { type: String },
  arrivalDay: { type: String },
  isVerified: { type: String, default: "false" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const UserRegister = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = UserRegister;
