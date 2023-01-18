const express = require("express");
let router = express.Router();
const userController = require("../controllers/userController");

router.route("/")
    .get(userController.getUsers)
    .post(userController.createUser);

router.route("/:id")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;