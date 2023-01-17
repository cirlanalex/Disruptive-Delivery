const express = require("express");
let router = express.Router();
const driverController = require("../controllers/driverController");

router.route("/")
    .get(driverController.getDrivers)
    .post(driverController.createDriver);

router.route("/:id")
    .get(driverController.getDriver)
    .put(driverController.updateDriver)
    .delete(driverController.deleteDriver);

module.exports = router;