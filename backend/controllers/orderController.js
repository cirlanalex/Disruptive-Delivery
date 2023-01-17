const orderModel = require('../models/order');

const getOrders = async (req, res) => {
    try {
        const order = await orderModel.find();
        if (!order) {
            return res.status(404).json({message: 'There are no orders.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const order = await orderModel.findById(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.user_id) {
        return 'The user_id is required.';
    }
    if (!body.driver_id) {
        return 'The driver_id is required.';
    }
    if (!body.vehicle_id) {
        return 'The vehicle_id is required.';
    }
    if (!body.pickup_address) {
        return 'The pickup_address is required.';
    }
    if (!body.dropoff_address) {
        return 'The dropoff_address is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.user_id && body.user_id.length !== 24) {
        return 'The user_id needs to be 24 characters long.';
    }
    if (body.driver_id && body.driver_id.length !== 24) {
        return 'The driver_id needs to be 24 characters long.';
    }
    if (body.vehicle_id && body.vehicle_id.length !== 24) {
        return 'The vehicle_id needs to be 24 characters long.';
    }
    return 'ok';
}

const createOrder = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const order = await orderModel.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const order = await orderModel.findByIdAndUpdate(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const order = await orderModel.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getOrders, getOrder, createOrder, updateOrder, deleteOrder };