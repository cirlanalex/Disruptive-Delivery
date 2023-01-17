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
}

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
}

function requiredChecks(body) {
    if (!body.name) {
        return 'The name is required.';
    }
    if (!body.address) {
        return 'The address is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    return 'ok';
}

const createWarehouse = async (req, res) => {
    try {
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
        }
        const warehouse = new warehouseModel({
            name: req.body.name,
            address: req.body.address,
        });
        await warehouse.save();
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const updateWarehouse = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
        }
        const warehouse = await warehouseModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            address: req.body.address,
        }, {new: true});
        if (!warehouse) {
            return res.status(404).json({message: 'The warehouse with the given ID was not found.'});
        }
        res.status(200).json(warehouse);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const deleteWarehouse = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const warehouse = await warehouseModel.findByIdAndDelete(req.params.id);
        if (!warehouse) {
            return res.status(404).json({message: 'The warehouse with the given ID was not found.'});
        }
        res.status(200).json({message: 'The warehouse has been deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { getWarehouses, getWarehouse, createWarehouse, updateWarehouse, deleteWarehouse };