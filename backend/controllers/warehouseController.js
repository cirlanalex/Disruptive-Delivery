const warehouseModel = require('../models/warehouse');

const getWarehouses = async (req, res) => {
    try {
        const warehouse = await warehouseModel.find();
        if (!warehouse) {
            return res.status(404).json({message: 'There are no warehouses.'});
        }
        res.status(200).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getWarehouse = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const warehouse = await warehouseModel.findById(req.params.id);
        if (!warehouse) {
            return res.status(404).json({message: 'The warehouse with the given ID was not found.'});
        }
        res.status(200).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.street_and_number) {
        return 'The street and number is required.';
    }
    if (!body.zipcode) {
        return 'The zipcode is required.';
    }
    if (!body.city) {
        return 'The city is required.';
    }
    if (!body.country) {
        return 'The country is required.';
    }
    if (!body.capacity) {
        return 'The capacity is required.';
    }
    if (!body.capacity_used) {
        return 'The capacity_used is required.';
    }
    if (!body.x_in_m) {
        return 'The x_in_m is required.';
    }
    if (!body.y_in_m) {
        return 'The y_in_m is required.';
    }
    if (!body.z_in_m) {
        return 'The z_in_m is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.street_and_number && body.street_and_number.length > 100) {
        return 'The street and number can only be 100 characters long.';
    }
    if (body.zipcode && body.zipcode.length > 10) {
        return 'The zipcode can only be 10 characters long.';
    }
    if (body.city && body.city.length > 100) {
        return 'The city can only be 100 characters long.';
    }
    if (body.country && body.country.length > 100) {
        return 'The country can only be 100 characters long.';
    }
    if (body.capacity && body.capacity < 0) {
        return 'The capacity can not be negative.';
    }
    if (body.capacity_used && body.capacity_used < 0) {
        return 'The capacity_used can not be negative.';
    }
    if (body.x_in_m && body.x_in_m < 0) {
        return 'The x_in_m can not be negative.';
    }
    if (body.y_in_m && body.y_in_m < 0) {
        return 'The y_in_m can not be negative.';
    }
    if (body.z_in_m && body.z_in_m < 0) {
        return 'The z_in_m can not be negative.';
    }
    return 'ok';
};

const createWarehouse = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const warehouse = await warehouseModel(req.body);
        warehouse.save();
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateWarehouse = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const warehouse = await warehouseModel.findByIdAndUpdate(req.params.id);
        if (!warehouse) {
            return res.status(404).json({message: 'The warehouse with the given ID was not found.'});
        }
        warehouse.street_and_number = req.body.street_and_number ?? warehouse.street_and_number;
        warehouse.zipcode = req.body.zipcode ?? warehouse.zipcode;
        warehouse.city = req.body.city ?? warehouse.city;
        warehouse.country = req.body.country ?? warehouse.country;
        warehouse.capacity = req.body.capacity ?? warehouse.capacity;
        warehouse.capacity_used = req.body.capacity_used ?? warehouse.capacity_used;
        warehouse.x_in_m = req.body.x_in_m ?? warehouse.x_in_m;
        warehouse.y_in_m = req.body.y_in_m ?? warehouse.y_in_m;
        warehouse.z_in_m = req.body.z_in_m ?? warehouse.z_in_m;
        warehouse.save();
        res.status(200).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteWarehouse = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const warehouse = await warehouseModel.findById(req.params.id);
        if (!warehouse) {
            return res.status(404).json({message: 'The warehouse with the given ID was not found.'});
        }
        await warehouse.remove();
        res.status(200).json({message: 'The warehouse was deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse };