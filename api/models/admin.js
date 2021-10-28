const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../config/database");

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;