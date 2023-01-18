const express = require("express");
let router = express.Router();
const callcenterOperatorController = require("../controllers/callcenterController");

router.route("/")
    .get(callcenterOperatorController.getCallcenterOperators)
    .post(callcenterOperatorController.createCallcenterOperator);

router.route("/:id")
    .get(callcenterOperatorController.getCallcenterOperator)
    .put(callcenterOperatorController.updateCallcenterOperator)
    .delete(callcenterOperatorController.deleteCallcenterOperator);

module.exports = router;