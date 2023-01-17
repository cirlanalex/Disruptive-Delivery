const warehouseEmployeeModel = require('../models/warehouseEmployee');

const getWarehouseEmployees = async (req, res) => {
    try {
        const warehouseEmployee = await warehouseEmployeeModel.find();
        if (!warehouseEmployee) {
            return res.status(404).json({message: 'There are no warehouse employees.'});
        }
        res.status(200).json(warehouseEmployee);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getWarehouseEmployee = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const warehouseEmployee = await warehouseEmployeeModel.findById(req.params.id);
        if (!warehouseEmployee) {
            return res.status(404).json({message: 'The warehouse employee with the given ID was not found.'});
        }
        res.status(200).json(warehouseEmployee);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.user_id) {
        return 'The user_id is required.';
    }
    if (!body.warehouse_id) {
        return 'The warehouse_id is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.user_id.length !== 24) {
        return 'The user_id needs to be 24 characters long.';
    }
    if (body.warehouse_id.length !== 24) {
        return 'The warehouse_id needs to be 24 characters long.';
    }
    return 'ok';
};

const createWarehouseEmployee = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const warehouseEmployee = await warehouseEmployeeModel.create(req.body);
        warehouseEmployee.save();
        res.status(201).json(warehouseEmployee);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateWarehouseEmployee = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const warehouseEmployee = await warehouseEmployeeModel.findByIdAndUpdate(req.params.id);
        if (!warehouseEmployee) {
            return res.status(404).json({message: 'The warehouse employee with the given ID was not found.'});
        }
        warehouseEmployee.user_id = req.body.user_id ?? warehouseEmployee.user_id;
        warehouseEmployee.warehouse_id = req.body.warehouse_id ?? warehouseEmployee.warehouse_id;
        warehouseEmployee.save();
        res.status(200).json(warehouseEmployee);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteWarehouseEmployee = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const warehouseEmployee = await warehouseEmployeeModel.findByIdAndDelete(req.params.id);
        if (!warehouseEmployee) {
            return res.status(404).json({message: 'The warehouse employee with the given ID was not found.'});
        }
        res.status(200).json(warehouseEmployee);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getWarehouseEmployees, getWarehouseEmployee, createWarehouseEmployee, updateWarehouseEmployee, deleteWarehouseEmployee };