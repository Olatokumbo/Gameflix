const router = require("express").Router();
const adminController = require("../controllers/adminControllers");
const verifyToken = require("../middlewares/verifyToken");

router.post("/signin", adminController.adminLogin);
router.get("/game/list", verifyToken, adminController.gameList);
router.get("/game/:id", verifyToken, adminController.gameInfo);

module.exports = router;
