const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    comapny_name:String,
    position:String,
    contract:String,
    Location:String,
    comapny_logo:String
  }
  
);
const jobmodel = mongoose.model("job", userSchema);
module.exports = jobmodel;