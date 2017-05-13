// Load required packages
var Game = require('../models/game');

// Create endpoint /api/games for POSTS
exports.postGames = function(req, res) {
  // Create a new instance of the Game model
  var game = new Game();

  // Set the game properties that came from the POST data
  game.state = req.body.state;
  // Save the game and check for errors
  game.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game added to the locker!', data: game });
  });
};

// Create endpoint /api/games for GET
exports.getGames = function(req, res) {
  // Use the Game model to find all game
  Game.find(function(err, games) {
    if (err)
      res.send(err);

    res.json(games);
  });
};

// Create endpoint /api/games/:game_id for GET
exports.getGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.findById(req.params.game_id, function(err, game) {
    if (err)
      res.send(err);

    res.json(game);
  });
};

// Create endpoint /api/games/:game_id for PUT
exports.putGame = function(req, res) {
  // Use the Game model to find a specific game
  Game.findById(req.params.game_id, function(err, game) {
    if (err)
      res.send(err);

    // Update the existing game quantity
    game.state = req.body.state;

    // Save the game and check for errors
    game.save(function(err) {
      if (err)
        res.send(err);

      res.json(game);
    });
  });
};

// Create endpoint /api/games/:game_id for DELETE
exports.deleteGame = function(req, res) {
  // Use the Game model to find a specific game and remove it
  Game.findByIdAndRemove(req.params.game_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Game removed from the locker!' });
  });
};