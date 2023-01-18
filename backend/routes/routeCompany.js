const express = require("express");
let router = express.Router();
const companyController = require("../controllers/companyController");

router.route("/")
    .get(companyController.getCompanies)
    .post(companyController.createCompany);

router.route("/:id")
    .get(companyController.getCompany)
    .put(companyController.updateCompany)
    .delete(companyController.deleteCompany);

module.exports = router;