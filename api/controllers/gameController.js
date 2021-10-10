const Game = require("../models/game");
const jwt = require("jsonwebtoken");
const { sessionizeUser } = require("../utils/helper");

//////ADD GAMES
const addGame = (req, res) => {
  const { title, genre, posterURL, coverURL, ratings } = req.body;
  const newGame = new Game({
    title,
    genre,
    posterURL,
    coverURL,
    ratings,
    comments: [],
  });

  newGame.save().then((user) => {
    res.status(200).json(user);
  });
};


//////LIST GAMES BY GENRE
const genreList = (req, res) => {
  const { genre } = req.params;

  Game.find({ genre }, (err, list) => {
    if (err) throw err;
    res.status(200).json(list);
  });
};


//////GET GAME INFO
const gameInfo = (req, res) => {
  const { id } = req.params;
  Game.findById(id)
    .then((game) => {
      return res.status(200).json(game);
    })
    .catch((err) => {
      return res.status(404).json({ message: err.message });
    });
};

module.exports = {
  addGame,
  genreList,
  gameInfo,
};
