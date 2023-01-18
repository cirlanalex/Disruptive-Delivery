const express = require("express");
let router = express.Router();

const warehouseController = require("../controllers/warehouseController");

router.route("/")
    .get(warehouseController.getWarehouses)
    .post(warehouseController.createWarehouse);

router.route("/:id")
    .get(warehouseController.getWarehouse)
    .put(warehouseController.updateWarehouse)
    .delete(warehouseController.deleteWarehouse);

module.exports = router;