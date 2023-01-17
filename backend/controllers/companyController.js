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
    if (!body.address) {
        return 'The address is required.';
    }
    if (!body.city) {
        return 'The city is required.';
    }
    if (!body.postal_code) {
        return 'The postal_code is required.';
    }
    if (!body.country) {
        return 'The country is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.name && body.name.length > 100) {
        return 'The name cannot be longer than 100 characters.';
    }
    if (body.address && body.address.length > 100) {
        return 'The address cannot be longer than 100 characters.';
    }
    if (body.city && body.city.length > 100) {
        return 'The city cannot be longer than 100 characters.';
    }
    if (body.postal_code && body.postal_code.length > 10) {
        return 'The postal_code cannot be longer than 10 characters.';
    }
    if (body.country && body.country.length > 100) {
        return 'The country cannot be longer than 100 characters.';
    }
    return 'ok';
}

const createCompany = async (req, res) => {
    try {
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
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
        const requiredCheck = requiredChecks(req.body);
        if (requiredCheck !== 'ok') {
            return res.status(400).json({message: requiredCheck});
        }
        const validateCheck = validateChecks(req.body);
        if (validateCheck !== 'ok') {
            return res.status(400).json({message: validateCheck});
        }
        const company = await companyModel.findByIdAndUpdate(req.params.id);
        if (!company) {
            return res.status(404).json({message: 'The company with the given ID was not found.'});
        }
        company.name = req.body.name;
        company.address = req.body.address;
        company.city = req.body.city;
        company.postal_code = req.body.postal_code;
        company.country = req.body.country;
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