const router = require("express").Router();
const adminController = require("../controllers/adminControllers");
const verifyTokenAdmin = require("../middlewares/verifyTokenAdmin");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", verifyTokenAdmin, adminController.getAdminInfoByToken);
router.post("/signin", adminController.adminLogin);
router.get("/game/list", verifyTokenAdmin, adminController.gameList);
router.get("/game/:id", verifyTokenAdmin, adminController.gameInfo);
router.get("/game/image/:key", verifyTokenAdmin, adminController.getImage);
router.post(
  "/game/upload",
  verifyTokenAdmin,
  upload.fields([
    {
      name: "posterPhoto",
      maxCount: 1,
    },
    {
      name: "coverPhoto",
      maxCount: 1,
    },
  ]),
  adminController.uploadImage
);

module.exports = router;
