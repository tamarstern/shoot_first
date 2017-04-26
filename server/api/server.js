// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var gameController = require('./controllers/gameController');

// Connect to the gamelocker MongoDB
mongoose.connect('mongodb://localhost:27017/shootGame');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /games
router.route('/games')
  .post(gameController.postGames)
  .get(gameController.getGames);

// Create endpoint handlers for /games/:game_id
router.route('/games/:game_id')
  .get(gameController.getGame)
  .put(gameController.putGame)
  .delete(gameController.deleteGame);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);