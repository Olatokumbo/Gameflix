const userController = require("../controllers/userController");
const router = require("express").Router();

router.get("/:id", userController.getUserInfo);

module.exports = router;
