const warehouseEmployeeController = require('../controllers/warehouseEmployeeController');
const express = require('express');
let router = express.Router();

router.route('/')
    .get(warehouseEmployeeController.getWarehouseEmployees)
    .post(warehouseEmployeeController.createWarehouseEmployee);

router.route('/:id')
    .get(warehouseEmployeeController.getWarehouseEmployee)
    .put(warehouseEmployeeController.updateWarehouseEmployee)
    .delete(warehouseEmployeeController.deleteWarehouseEmployee);

module.exports = router;