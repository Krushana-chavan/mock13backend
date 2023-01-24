const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email:String,
    password:String
  }
  
);
const usermodel = mongoose.model("new", userSchema);
module.exports = usermodel;