const reviewModel = require('../models/review');

const getReviews = async (req, res) => {
    try {
        const review = await reviewModel.find();
        if (!review) {
            return res.status(404).json({message: 'There are no reviews.'});
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getReview = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const review = await reviewModel.findOne({product_id: req.params.id});
        if (!review) {
            return res.status(404).json({message: 'The review with the given ID was not found.'});
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const createReviews = async (req, res) => {
    try {
        const review = new reviewModel({
            product_id: req.body.product_id,
            rating: req.body.rating,
            review: req.body.review,
        });
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = { getReviews, getReview, createReviews};