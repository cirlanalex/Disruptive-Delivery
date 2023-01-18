const express = require("express");
let router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.route("/")
    .get(vehicleController.getVehicles)
    .post(vehicleController.createVehicle);

router.route("/:id")
    .get(vehicleController.getVehicle)
    .put(vehicleController.updateVehicle)
    .delete(vehicleController.deleteVehicle);

module.exports = router;