const driverModel = require('../models/driver');

const getDrivers = async (req, res) => {
    try {
        const driver = await driverModel.find();
        if (!driver) {
            return res.status(404).json({message: 'There are no drivers.'});
        }
        res.status(200).json(driver);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getDriver = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const driver = await driverModel.findById(req.params.id);
        if (!driver) {
            return res.status(404).json({message: 'The driver with the given ID was not found.'});
        }
        res.status(200).json(driver);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.user_id) {
        return 'The user_id is required.';
    }
    if (!body.vehicle_id) {
        return 'The vehicle_id is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.user_id && body.user_id.length !== 24) {
        return 'The user_id needs to be 24 characters long.';
    }
    if (body.vehicle_id && body.vehicle_id.length !== 24) {
        return 'The vehicle_id needs to be 24 characters long.';
    }
    return 'ok';
};

const createDriver = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const driver = await driverModel.create(req.body);
        driver.save();
        res.status(201).json(driver);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateDriver = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const driver = await driverModel.findByIdAndUpdate(req.params.id);
        if (!driver) {
            return res.status(404).json({message: 'The driver with the given ID was not found.'});
        }
        driver.user_id = req.body.user_id ?? driver.user_id;
        driver.vehicle_id = req.body.vehicle_id ?? driver.vehicle_id;
        driver.save();
        res.status(200).json(driver);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteDriver = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const driver = await driverModel.findByIdAndDelete(req.params.id);
        if (!driver) {
            return res.status(404).json({message: 'The driver with the given ID was not found.'});
        }
        res.status(200).json({message: 'The driver was deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { getDrivers, getDriver, createDriver, updateDriver, deleteDriver };
