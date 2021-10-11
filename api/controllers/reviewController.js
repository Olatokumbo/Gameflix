const Game = require("../models/game");

const addReview = (req, res) => {
  const { id } = req.params;
  const { userId, comment, rating } = req.body;
  Game.updateOne(
    { _id: id },
    {
      $push: {
        reviews: {
          $each: [
            {
              userId,
              comment,
              rating,
              date: new Date(),
            },
          ],
        },
      },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addReview,
};
