// Load required packages
var User = require('../models/user');

// Create endpoint /api/users for POSTS
exports.postUsers = function(req, res) {
  // Create a new instance of the User model
  var user = new User();

  // Set the user properties that came from the POST data
  user.nickName = req.body.nickName;

  // Save the user and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User added to the locker!', data: user });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  // Use the User model to find all user
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};

// Create endpoint /api/users/:user_id for GET
exports.getUser = function(req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

    res.json(user);
  });
};

// Create endpoint /api/users/:user_id for PUT
exports.putUser = function(req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

    // Update the existing user quantity
    user.nickName = req.body.nickName;

    // Save the user and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);

      res.json(user);
    });
  });
};

// Create endpoint /api/users/:user_id for DELETE
exports.deleteUser = function(req, res) {
  // Use the User model to find a specific user and remove it
  Beer.findByIdAndRemove(req.params.user_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed from the locker!' });
  });
};