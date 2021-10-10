const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { sessionizeUser } = require("../utils/helper");

const signup = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
    createdAt: new Date(),
  });

  newUser.save().then((user) => {
    res.status(200).json(user);
  });
};

const signin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
  });
};

module.exports = {
  signup,
  signin
};
