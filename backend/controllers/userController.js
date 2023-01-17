const userModel = require('../models/user');

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
    if (!body.first_name) {
        return 'The first_name is required.';
    }
    if (!body.last_name) {
        return 'The last_name is required.';
    }
    if (!body.email) {
        return 'The email is required.';
    }
    if (!body.password) {
        return 'The password is required.';
    }
    if (!body.phone) {
        return 'The phone is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.email && !body.email.includes('@')) {
        return 'The email is invalid.';
    }
    if (body.phone && body.phone.length !== 10) {
        return 'The phone needs to be 10 characters long.';
    }
    return 'ok';
}

const createUser = async (req, res) => {
    try {
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
        }
        const user = new userModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

const updateUser = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: 'The user with the given ID was not found.'});
        }
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
        }
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.phone = req.body.phone;
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
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