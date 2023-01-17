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
    if (!body.type) {
        return 'The type is required.';
    }
    if (!body.capacity) {
        return 'The capacity is required.';
    }
    if (!body.width) {
        return 'The width is required.';
    }
    if (!body.height) {
        return 'The height is required.';
    }
    if (!body.length) {
        return 'The length is required.';
    }
    if (!body.fragile) {
        return 'The fragile is required.';
    }
    if (!body.license_plate) {
        return 'The license_plate is required.';
    }
    if (!body.availability) {
        return 'The availability is required.';
    }
    if (!body.capacity_used) {
        return 'The capacity_used is required.';
    }
    if (!body.needsMaintenance) {
        return 'The needsMaintenance is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.type && body.type !== 'car' && body.type !== 'truck' && body.type !== 'motorcycle' && body.type !== 'scooter' && body.type !== 'bicycle' && body.type !== 'van') {
        return 'The type needs to be car, truck, motorcycle, scooter, bicycle or van.';
    }
    if (body.capacity && body.capacity < 0) {
        return 'The capacity needs to be a positive number.';
    }
    if (body.width && body.width < 0) {
        return 'The width needs to be a positive number.';
    }
    if (body.height && body.height < 0) {
        return 'The height needs to be a positive number.';
    }
    if (body.length && body.length < 0) {
        return 'The length needs to be a positive number.';
    }
    if (body.fragile && body.fragile !== 'true' && body.fragile !== 'false') {
        return 'The fragile needs to be true or false.';
    }
    if (body.license_plate && body.license_plate.length < 20) {
        return 'The license_plate needs to be at most 20 characters long.';
    }
    if (body.availability && body.availability !== 'true' && body.availability !== 'false') {
        return 'The availability needs to be true or false.';
    }
    if (body.capacity_used && body.capacity_used < 0) {
        return 'The capacity_used needs to be a positive number.';
    }
    if (body.needsMaintenance && body.needsMaintenance !== 'true' && body.needsMaintenance !== 'false') {
        return 'The needsMaintenance needs to be true or false.';
    }
    return 'ok';
};

const createVehicle = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const vehicle = await vehicleModel(req.body);
        vehicle.save();
        res.status(201).json(vehicle);
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
};

const updateVehicle = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const vehicle = await vehicleModel.findByIdAndUpdate(req.params.id);
        if (!vehicle) {
            return res.status(404).json({message: 'The vehicle with the given ID was not found.'});
        }
        vehicle.type = req.body.type ?? vehicle.type;
        vehicle.capacity = req.body.capacity ?? vehicle.capacity;
        vehicle.width = req.body.width ?? vehicle.width;
        vehicle.height = req.body.height ?? vehicle.height;
        vehicle.length = req.body.length ?? vehicle.length;
        vehicle.fragile = req.body.fragile ?? vehicle.fragile;
        vehicle.license_plate = req.body.license_plate ?? vehicle.license_plate;
        vehicle.availability = req.body.availability ?? vehicle.availability;
        vehicle.capacity_used = req.body.capacity_used ?? vehicle.capacity_used;
        vehicle.needsMaintenance = req.body.needsMaintenance ?? vehicle.needsMaintenance;
        vehicle.save();
        res.status(200).json(vehicle);
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