// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const rest = require('./restaurant.js');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    console.log(req)
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // route for getting users
  app.get("/api/users", function(_req, res) {
    db.Like.findAll({ 
      attributes: [db.Sequelize.fn('DISTINCT', db.Sequelize.col('user')) ,'user']
      
     })
      .then(function(usersData) {
        //console.log(usersData);
        var usersArray = [];
        console.log(usersData)
        for(var i=0; i<usersData.length; i++) {
      
          var user = {
            user: usersData[i].user
          }
        
          usersArray.push(user);
        };
        var hbsObj = {
          users: usersArray
        };
        
        res.render("users", hbsObj);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/restaurants", function(req, res) {
    res.render("restaurants");
  });

  app.post("/api/restaurants", (req, res) => {
    console.log(req.body);
    rest.main();

  });


  app.get("/api/match", function(req, res) {
    console.log("accessing matches")
    res.render("match");
  });

  // // route for adding restaurant to database
  // app.post("/api/restaurants", function(req, res) {
  //   db.Restaurant.create({
  //     name: req.body.restaurant
  //   })
  //     .then(function() {
  //       res.send(`Added restaurant ${req.body.restaurant}!`);
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  // route for adding like to database
  app.post("/api/likes/add", function(req, res) {
    console.log(req.body);
    //console.log(`Attempting to add ${JSON.stringify(req.body)}`)
    db.Like.create({
      user: req.body.user,
      restaurantId: req.body.restaurantId,
      imageURL: req.body.imageURL,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    })
      .then(function(data) {
        //console.log(data)
        res.send(`Added like for ${req.body.restaurantId}!`);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // route for getting user likes
  app.get("/api/showLikes/:user", function(req, res) {
    console.log(req.params)
    db.Like.findAll({
      //attributes: ["restaurantId"],
      where: { user: req.params.user }
    })
      .then(function(data) {
        console.log(data)
        res.json(data);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/restaurants", (req, res) => {
    let searchQuery = $("#submit-city").val();

  })
};
