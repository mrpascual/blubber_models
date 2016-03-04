var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");


var User = require("./models/User"),
    Thread = require("./models/Thread");

Thread.remove({}, function(err, results) {
 User.remove({}, function(err, results) {  //clearing data when running seeds.js file
  User.create([
      {name: "Tracy McGrady",  email: "tmac@nba.com", moderator: true},
      {name: "Samaki Walker", email: "sw@nba.com"},
      {name: "Sam Cassel", email: "alien@nba.com"},
      {name: "Benga", email: "ugly@nba.com"}
    ], function(err, users){
      if (err) console.log(err);
      // console.log(users);

      // defining a variable for user[0] when creating thread
      var tracy = users[0];
      var samaki = users[1];

      //thread created by tracy
      Thread.create([
        {name: "YOLO", creator: tracy, creatorName: tracy.name},
        {name: "Think Different", creator: samaki, creatorName: samaki.name}
        ],
        function(err, threads) {    //call out function to display errors & results
          if (err) console.log(err); // if there's an error, it will display error in terminal
          // console.log(thread); // if there's no error, it will display results in terminal

          // add some posts
          var yolo = threads[0];

          yolo.posts.push({
            author: tracy,
            title: "I could of been better than Kobe",
            body: "Yadidimean?!"
          });

          yolo.posts.push({
            author: samaki,
            title: "I could of been better than Luke",
            body: "?!"
          });



          yolo.save(function(err, results){
            // console.log(err)
            // console.log(results)


            var post = yolo.posts[0];

            post.comments.push({
              author: samaki,
              body: "HI no ring"
            });

            yolo.save(function(err, resutls){
              console.log(err);
              console.log(results)
              mongoose.connection.close();
            });
          });

      });
    });
  });
});
