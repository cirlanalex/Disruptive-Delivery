const vehicleModel = require('../models/vehicle');

const getVehicles = async (req, res) => {
    try {
        const vehicle = await vehicleModel.find();
        if (!vehicle) {
            return res.status(404).json({message: 'There are no vehicles.'});
        }
        res.status(200).json(vehicle);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getVehicle = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const vehicle = await vehicleModel.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({message: 'The vehicle with the given ID was not found.'});
        }
        res.status(200).json(vehicle);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.name) {
        return 'The name is required.';
    }
    if (!body.type) {
        return 'The type is required.';
    }
    if (!body.seats) {
        return 'The seats is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.seats && isNaN(body.seats)) {
        return 'The seats needs to be a number.';
    }
    return 'ok';
};

const createVehicle = async (req, res) => {
    const result = requiredChecks(req.body);
    if (result !== 'ok') {
        return res.status(400).json({message: result});
    }
    const vehicle = new vehicleModel({
        name: req.body.name,
        type: req.body.type,
        seats: req.body.seats,
    });
    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

const updateVehicle = async (req, res) => {
    const result = validateChecks(req.body);
    if (result !== 'ok') {
        return res.status(400).json({message: result});
    }
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const vehicle = await vehicleModel.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({message: 'The vehicle with the given ID was not found.'});
        }
        if (req.body.name) {
            vehicle.name = req.body.name;
        }
        if (req.body.type) {
            vehicle.type = req.body.type;
        }
        if (req.body.seats) {
            vehicle.seats = req.body.seats;
        }
        const updatedVehicle = await vehicle.save();
        res.status(200).json(updatedVehicle);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteVehicle = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const vehicle = await vehicleModel.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({message: 'The vehicle with the given ID was not found.'});
        }
        await vehicle.remove();
        res.status(200).json({message: 'The vehicle has been deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle };