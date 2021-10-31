const Admin = require("../models/admin");
const Game = require("../models/game");
const { sessionizeUser } = require("../utils/helper");
const jwt = require("jsonwebtoken");
const { uploadFile, getFileStream } = require("../s3");
const path = require("path")
const removeDir = require("../utils/removeDir");
require("dotenv").config();

const adminLogin = (req, res) => {
  const { username, password } = req.body;

  Admin.findOne({ username }, (err, user) => {
    if (err) throw err;
    if (user) {
      if (user.password === password) {
        jwt.sign(
          sessionizeUser(user._doc),
          process.env.ADMIN_SECRET_KEY,
          //{ expiresIn: "1h" },
          (err, token) => {
            if (!err)
              res.status(201).json({ ...sessionizeUser(user._doc), token });
            else res.status(502).json({ message: "There has been an error" });
          }
        );
      } else res.status(401).send({ message: "Invalid Login Credentials" });
    } else res.status(401).send({ message: "User Account does not Exist" });
  });
};

//////GET GAME List
const gameList = (req, res) => {
  Game.find({})
    .then((games) => {
      return res.status(200).json(games);
    })
    .catch((err) => {
      return res.status(404).json({ message: err.message });
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

const getAdminInfoByToken = (req, res) => {
  return res.status(200).json(req.userData);
};

const uploadImage = async (req, res) => {
  const { title, genre } = req.body;
  const files = await uploadFile(req.files);

  const newGame = new Game({
    title,
    genre,
    posterURL: files[1].key,
    coverURL: files[0].key,
    reviews: [],
  });

  newGame.save().then((game) => {
    res.status(200).json(game);
    const pathToDir = path.join(__dirname, "..", "uploads");
    removeDir(pathToDir);
  });
};

const getImage = (req, res) => {
  try {
    const readStream = getFileStream(req.params.key);
    readStream.pipe(res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  adminLogin,
  gameInfo,
  gameList,
  getAdminInfoByToken,
  uploadImage,
  getImage,
};
