const gameController = require("../controllers/gameController");
const router = require("express").Router();

router.post("/add", gameController.addGame);
router.get("/list/:genre", gameController.genreList);
router.get("/:id", gameController.gameInfo);

module.exports = router;
