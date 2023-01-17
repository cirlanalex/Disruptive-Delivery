const callcenterModel = require('../models/callcenterOperator');

function requiredChecks(body) {
    if (!body.user_id) {
        return 'The user_id is required.';
    }
    return 'ok';
};

function validateChecks(body) {
    if (body.user_id && body.user_id.length !== 24) {
        return 'The user_id needs to be 24 characters long.';
    }
    return 'ok';
};

const getCallcenterOperators = async (req, res) => {
    try {
        const callcenterOperator = await callcenterModel.find();
        if (!callcenterOperator) {
            return 'There are no callcenter operators.';
        }
        res.status(200).json(callcenterOperator);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getCallcenterOperator = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const callcenterOperator = await callcenterModel.findById(req.params.id);
        if (!callcenterOperator) {
            return res.status(404).json({message: 'The callcenter operator with the given ID was not found.'});
        }
        res.status(200).json(callcenterOperator);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const createCallcenterOperator = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const callcenterOperator = await callcenterModel.create(req.body);
        callcenterOperator.save();
        res.status(201).json(callcenterOperator);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateCallcenterOperator = async (req, res) => {
    try {
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const callcenterOperator = await callcenterModel.findByIdAndUpdate(req.params.id);
        if (!callcenterOperator) {
            return res.status(404).json({message: 'The callcenter operator with the given ID was not found.'});
        }
        callcenterOperator.user_id = req.body.user_id ?? callcenterOperator.user_id;
        callcenterOperator.save();
        res.status(200).json(callcenterOperator);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteCallcenterOperator = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const callcenterOperator = await callcenterModel.findById(req.params.id);
        if (!callcenterOperator) {
            return res.status(404).json({message: 'The callcenter operator with the given ID was not found.'});
        }
        await callcenterOperator.remove();
        res.status(200).json({message: 'The callcenter operator was deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getCallcenterOperators, getCallcenterOperator, createCallcenterOperator, updateCallcenterOperator, deleteCallcenterOperator };