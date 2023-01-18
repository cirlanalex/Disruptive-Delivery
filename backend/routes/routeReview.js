const reviewController = require('../controllers/reviewController');

const express = require('express');
const router = express.Router();

router
    .get('/', reviewController.getReviews)
    .post('/', reviewController.createReviews);

router
    .get('/:id', reviewController.getReview)

module.exports = router;