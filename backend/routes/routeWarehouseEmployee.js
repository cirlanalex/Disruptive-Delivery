const warehouseWorkerController = require('../controllers/warehouseEmployeeController');
const express = require('express');

let router = express.Router();

router.route('/')
    .get(warehouseWorkerController.getWarehouses)
    .post(warehouseWorkerController.createWarehouse);

router.route('/:id')
    .get(warehouseWorkerController.getWarehouse)
    .put(warehouseWorkerController.updateWarehouse)
    .delete(warehouseWorkerController.deleteWarehouse);

module.exports = router;