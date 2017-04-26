// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var GameSchema   = new mongoose.Schema({
  state: String
});

// Export the Mongoose model
module.exports = mongoose.model('Game', UserSchema);