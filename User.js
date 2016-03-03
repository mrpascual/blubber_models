var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");


//Schema
var userSchema = new mongoose.Schema ({
  name:      {type: String, required: true},
  email:     {type: String, required: true},
  moderator: {type: Boolean, default: false}
});



//Model
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, results) {
User.create([
  {name: "Tracy McGrady", email: "tmac@nba.com", moderator: true},
  {name: "Samaki Walker", email: "sw@nba.com"},
  {name: "Sam Cassel", email: "alien@nba.com"},
  {name: "Benga", email: "ugly@nba.com"}
], function(err, results){
  if (err) console.log(err);
  console.log(results);
  mongoose.connection.close();
 });
});
