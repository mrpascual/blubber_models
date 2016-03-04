var mongoose = require("mongoose");

//Schema
var userSchema = new mongoose.Schema ({
  name:      {type: String, required: true},
  email:     {type: String, required: true},
  moderator: {type: Boolean, default: false}
});



//Model
var User = mongoose.model("User", userSchema);

module.exports = User;
