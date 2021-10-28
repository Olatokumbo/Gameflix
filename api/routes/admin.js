const router = require("express").Router();
const adminController = require("../controllers/adminControllers");
const verifyTokenAdmin = require("../middlewares/verifyTokenAdmin");

router.get("/",verifyTokenAdmin, adminController.getAdminInfoByToken);
router.post("/signin", adminController.adminLogin);
router.get("/game/list", verifyTokenAdmin, adminController.gameList);
router.get("/game/:id", verifyTokenAdmin, adminController.gameInfo);

module.exports = router;
