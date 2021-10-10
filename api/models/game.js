const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../config/database");

const CommentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  posterURL: { type: String, required: true },
  coverURL: { type: String, required: true },
  ratings: { type: Number, required: true },
  comments: { type: [CommentSchema], required: true },
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
