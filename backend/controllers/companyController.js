const companyModel = require('../models/company');

const getCompanies = async (req, res) => {
    try {
        const company = await companyModel.find();
        if (!company) {
            return res.status(404).json({message: 'There are no companies.'});
        }
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getCompany = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const company = await companyModel.findById(req.params.id);
        if (!company) {
            return res.status(404).json({message: 'The company with the given ID was not found.'});
        }
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.name) {
        return 'The name is required.';
    }
    if (!body.api) {
        return 'The api link is required.';
    }
    if (!body.key) {
        return 'The key is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.name && body.name.length > 100) {
        return 'The name cannot be longer than 100 characters.';
    }
    if (body.api && body.api.length > 500) {
        return 'The api link cannot be longer than 500 characters.';
    }
    if (body.key && body.key.length > 100) {
        return 'The key cannot be longer than 100 characters.';
    }
    return 'ok';
}

const createCompany = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const company = await companyModel.create(req.body);
        company.save();
        res.status(201).json(company);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateCompany = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateMsg(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const company = await companyModel.findByIdAndUpdate(req.params.id);
        if (!company) {
            return res.status(404).json({message: 'The company with the given ID was not found.'});
        }
        company.name = req.body.name ?? company.name;
        company.api = req.body.api ?? company.api;
        company.key = req.body.key ?? company.key;
        company.save();
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteCompany = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const company = await companyModel.findById(req.params.id);
        if (!company) {
            return res.status(404).json({message: 'The company with the given ID was not found.'});
        }
        await companyModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'The company was deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getCompanies, getCompany, createCompany, updateCompany, deleteCompany };