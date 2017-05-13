const express = require('express');
const router = express.Router();

// declare axios for making http requests
//const axios = require('axios');
// Load required packages
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

// Create endpoint handlers for /games
router.route('/games')
  .post(gameController.postGames)
  .get(gameController.getGames);

// Create endpoint handlers for /games/:game_id
router.route('/games/:game_id')
  .get(gameController.getGame)
  .put(gameController.putGame)
  .delete(gameController.deleteGame);

  app.use('/api', router);

module.exports = router;