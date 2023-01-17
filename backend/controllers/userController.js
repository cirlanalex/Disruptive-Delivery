const userModel = require('../models/user');
const warehouseEmployeeController = require('./warehouseEmployeeController');
const driverController = require('./driverController');
const callcenterController = require('./callcenterController');

const getUsers = async (req, res) => {
    try {
        const user = await userModel.find();
        if (!user) {
            return res.status(404).json({message: 'There are no users.'});
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getUser = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'The user with the given ID was not found.'});
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

function requiredChecks(body) {
    if (!body.email) {
        return 'The email is required.';
    }
    if (!body.password) {
        return 'The password is required.';
    }
    if (!body.first_name) {
        return 'The first name is required.';
    }
    if (!body.last_name) {
        return 'The last name is required.';
    }
    if (!body.employee) {
        return 'The employee is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.email && !body.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && (body.email.length < 5 || body.email.length > 100)) {
        return 'The email must be of the form: user@mail.xyz and must be between 5 and 100 characters long.';
    }
    if (body.password && (body.password.length < 5 || body.password.length > 100)) {
        return 'The password must be between 5 and 100 characters long.';
    }
    if (body.first_name && (body.first_name.length < 4 || body.first_name.length > 100)) {
        return 'The first name must be between 4 and 100 characters long.';
    }
    if (body.last_name && (body.last_name.length < 4 || body.last_name.length > 100)) {
        return 'The last name must be between 4 and 100 characters long.';
    }
    if (body.employee && (body.employee !== true && body.employee !== false)) {
        return 'The employee must be true or false.';
    }
    if (body.employee && body.employee === true) {
        if (!body.employee_type) {
            return 'The employee type is required if you set employee to true';
        }
        if (body.employee_type && (body.employee_type !== 'driver' && body.employee_type !== 'warehouseEmployee' && body.employee_type !== 'callcenterOperator')) {
            return 'The employee type must be driver, warehouseEmployee or callcenterOperator.';
        }
        if (body.employee_type === 'driver') {
            if (!body.vehicle_id) {
                return 'The vehicle id is required if you set employee type to driver.';
            }
            if (body.vehicle_id.length !== 24) {
                return 'The vehicle id must be 24 characters long.';
            }
        }
        if (body.employee_type === 'warehouseEmployee') {
            if (!body.warehouse_id) {
                return 'The warehouse id is required if you set employee type to warehouseEmployee.';
            }
            if (body.warehouse_id.length !== 24) {
                return 'The warehouse id must be 24 characters long.';
            }
        }
    }
    return 'ok';
}

const createUser = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const user = await userModel(req.body);
        user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const updateUser = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const user = await userModel.findByIdAndUpdate(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'The user with the given ID was not found.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        if (req.body.employee) {
            if (req.body.employee === 'false') {
                // await driverController.deleteDriver(req, res);
                // await warehouseEmployeeController.deleteWarehouseEmployee(req, res);
                // await callcenterController.deleteCallcenterOperator(req, res);
                console.log
                user.employee_type = null;
            } else {
                // if (user.employee_type === 'driver') {
                //     await driverController.deleteDriver(params, res);
                // }
                // if (user.employee_type === 'warehouseEmployee') {
                //     await warehouseEmployeeController.deleteWarehouseEmployee(req, res);
                // }
                // if (user.employee_type === 'callcenterOperator') {
                //     await callcenterController.deleteCallcenterOperator(req, res);
                // }
                // if (req.body.employee_type === 'driver') {
                //     let params = new Object();
                //     params.body.user_id = req.params.id;
                //     params.body.vehicle_id = req.body.vehicle_id;
                //     await driverController.createDriver(params, res);
                // }
                // if (req.body.employee_type === 'warehouseEmployee') {
                //     let params = new Object();
                //     params.body.user_id = req.params.id;
                //     params.body.warehouse_id = req.body.warehouse_id;
                //     await warehouseEmployeeController.createWarehouseEmployee(req, res);
                // }
                // if (req.body.employee_type === 'callcenterOperator') {
                //     console.log("test");
                //     let params = new Object();
                //     params.body.user_id = req.params.id;
                //     await callcenterController.createCallcenterOperator(req, res);
                //     console.log("test");
                // }
                user.employee_type = req.body.employee_type;
            }
        }
        user.email = req.body.email ?? user.email;
        user.password = req.body.password ?? user.password;
        user.first_name = req.body.first_name ?? user.first_name;
        user.last_name = req.body.last_name ?? user.last_name;
        user.employee = req.body.employee ?? user.employee;
        user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const deleteUser = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'The user with the given ID was not found.'});
        }
        await user.remove();
        res.status(200).json({message: 'The user has been deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };