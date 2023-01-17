const express = require("express");
let router = express.Router();
const orderController = require("../controllers/orderController");

router.route("/")
    .get(orderController.getOrders)
    .post(orderController.createOrder);

router.route("/:id")
    .get(orderController.getOrder)
    .put(orderController.updateOrder)
    .delete(orderController.deleteOrder);

module.exports = router;