const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./routes/auth");
const game = require("./routes/game");
require("dotenv").config();

const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/auth", auth);
app.use("/game", game);

app.get("/ping", (req, res) => {
  res.status(200).json({
    response: "PONG",
  });
});

app.get("*", (req, res) => {
  res.status(400).json({ message: "Invalid API request" });
});

app.listen(PORT, () => {
  console.log("Listening at PORT: " + PORT);
});
