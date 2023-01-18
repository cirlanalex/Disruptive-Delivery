const orderModel = require('../models/order');

const getOrders = async (req, res) => {
    try {
        const order = await orderModel.find();
        if (!order) {
            return res.status(404).json({message: 'There are no orders.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const getOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const order = await orderModel.findById(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

function requiredChecks(body) {
    if (!body.id_order) {
        return 'The id_order is required.';
    }
    if (!body.id_company) {
        return 'The id_company is required.';
    }
    if (!body.price_decided) {
        return 'The price_decided is required.';
    }
    if (!body.send_date) {
        return 'The send_date is required.';
    }
    if (!body.get_date) {
        return 'The get_date is required.';
    }
    if (!body.state) {
        return 'The state is required.';
    }
    if (!body.is_breakable) {
        return 'The is_breakable is required.';
    }
    if (!body.is_perishable) {
        return 'The is_perishable is required.';
    }
    if (!body.x_in_mm) {
        return 'The x_in_mm is required.';
    }
    if (!body.y_in_mm) {
        return 'The y_in_mm is required.';
    }
    if (!body.z_in_mm) {
        return 'The z_in_mm is required.';
    }
    if (!body.sender_info) {
        return 'The sender_info is required.';
    }
    if (!body.sender_info.name) {
        return 'The sender_info.name is required.';
    }
    if (!body.sender_info.street_and_number) {
        return 'The sender_info.street_and_number is required.';
    }
    if (!body.sender_info.zipcode) {
        return 'The sender_info.zipcode is required.';
    }
    if (!body.sender_info.city) {
        return 'The sender_info.city is required.';
    }
    if (!body.sender_info.country) {
        return 'The sender_info.country is required.';
    }
    if (!body.receiver_info) {
        return 'The receiver_info is required.';
    }
    if (!body.receiver_info.name) {
        return 'The receiver_info.name is required.';
    }
    if (!body.receiver_info.street_and_number) {
        return 'The receiver_info.street_and_number is required.';
    }
    if (!body.receiver_info.zipcode) {
        return 'The receiver_info.zipcode is required.';
    }
    if (!body.receiver_info.city) {
        return 'The receiver_info.city is required.';
    }
    if (!body.receiver_info.country) {
        return 'The receiver_info.country is required.';
    }
    return 'ok';
}

function validateChecks(body) {
    if (body.id_order && (body.id_order < 0 || body.id_order > 1000000000000)) {
        return 'The id_order needs to be between 0 and 1000000000000.';
    }
    if (body.id_company && body.id_company.length !== 24) {
        return 'The id_company needs to be 24 characters long.';
    }
    if (body.driver_id && body.driver_id.length !== 24) {
        return 'The driver_id needs to be 24 characters long.';
    }
    if (body.price_decided && (body.price_decided < 100 || body.price_decided > 100000)) {
        return 'The price_decided needs to be between 100 and 10000000.';
    }
    if (body.send_date && body.send_date.length > 100) {
        return 'The send_date needs to be 100 characters long.';
    }
    if (body.get_date && body.get_date.length > 100) {
        return 'The get_date needs to be 100 characters long.';
    }
    if (body.state && body.state < 1 || body.state > 5) {
        return 'The state needs to be between 1 and 5.';
    }
    if (body.is_breakable && body.is_breakable !== true && body.is_breakable !== false) {
        return 'The is_breakable needs to be true or false.';
    }
    if (body.is_perishable && body.is_perishable !== true && body.is_perishable !== false) {
        return 'The is_perishable needs to be true or false.';
    }
    if (body.x_in_mm && (body.x_in_mm < 0 || body.x_in_mm > 5000)) {
        return 'The x_in_mm needs to be between 0 and 5000.';
    }
    if (body.y_in_mm && (body.y_in_mm < 0 || body.y_in_mm > 5000)) {
        return 'The y_in_mm needs to be between 0 and 5000.';
    }
    if (body.z_in_mm && (body.z_in_mm < 0 || body.z_in_mm > 5000)) {
        return 'The z_in_mm needs to be between 0 and 5000.';
    }
    if (body.sender_info) {
        if (body.sender_info.name && body.sender_info.name.length > 100) {
            return 'The sender_info.name needs to be 100 characters or less.';
        }
        if (body.sender_info.street_and_number && body.sender_info.street_and_number.length > 100) {
            return 'The sender_info.street_and_number needs to be 100 characters or less.';
        }
        if (body.sender_info.zipcode && body.sender_info.zipcode.length > 10) {
            return 'The sender_info.zipcode needs to be 10 characters or less.';
        }
        if (body.sender_info.city && body.sender_info.city.length > 100) {
            return 'The sender_info.city needs to be 100 characters or less.';
        }
        if (body.sender_info.country && body.sender_info.country.length > 100) {
            return 'The sender_info.country needs to be 100 characters or less.';
        }
    }
    if (body.receiver_info) {
        if (body.receiver_info.name && body.receiver_info.name.length > 100) {
            return 'The receiver_info.name needs to be 100 characters or less.';
        }
        if (body.receiver_info.street_and_number && body.receiver_info.street_and_number.length > 100) {
            return 'The receiver_info.street_and_number needs to be 100 characters or less.';
        }
        if (body.receiver_info.zipcode && body.receiver_info.zipcode.length > 10) {
            return 'The receiver_info.zipcode needs to be 10 characters or less.';
        }
        if (body.receiver_info.city && body.receiver_info.city.length > 100) {
            return 'The receiver_info.city needs to be 100 characters or less.';
        }
        if (body.receiver_info.country && body.receiver_info.country.length > 100) {
            return 'The receiver_info.country needs to be 100 characters or less.';
        }
    }
    return 'ok';
}

const createOrder = async (req, res) => {
    try {
        let requiredMsg = requiredChecks(req.body);
        if (requiredMsg !== 'ok') {
            return res.status(400).json({message: requiredMsg});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const order = await orderModel.create(req.body);
        order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const updateOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        let validateMsg = validateChecks(req.body);
        if (validateMsg !== 'ok') {
            return res.status(400).json({message: validateMsg});
        }
        const order = await orderModel.findByIdAndUpdate(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        order.id_order = req.body.id_order ?? order.id_order;
        order.id_company = req.body.id_company ?? order.id_company;
        order.price_decided = req.body.price_decided ?? order.price_decided;
        order.send_date = req.body.send_date ? new Date(req.body.send_date) : order.send_date;
        order.get_date = req.body.get_date ? new Date(req.body.send_date) : order.get_date;
        order.state = req.body.state ?? order.state;
        order.is_breakable = req.body.is_breakable ?? order.is_breakable;
        order.is_perishable = req.body.is_perishable ?? order.is_perishable;
        order.x_in_mm = req.body.x_in_mm ?? order.x_in_mm;
        order.y_in_mm = req.body.y_in_mm ?? order.y_in_mm;
        order.z_in_mm = req.body.z_in_mm ?? order.z_in_mm;
        if (req.body.sender_info) {
            order.sender_info.name = req.body.sender_info.name ?? order.sender_info.name;
            order.sender_info.street_and_number = req.body.sender_info.street_and_number ?? order.sender_info.street_and_number;
            order.sender_info.zipcode = req.body.sender_info.zipcode ?? order.sender_info.zipcode;
            order.sender_info.city = req.body.sender_info.city ?? order.sender_info.city;
            order.sender_info.country = req.body.sender_info.country ?? order.sender_info.country;
        }
        if (req.body.receiver_info) {
            order.receiver_info.name = req.body.receiver_info.name ?? order.receiver_info.name;
            order.receiver_info.street_and_number = req.body.receiver_info.street_and_number ?? order.receiver_info.street_and_number;
            order.receiver_info.zipcode = req.body.receiver_info.zipcode ?? order.receiver_info.zipcode;
            order.receiver_info.city = req.body.receiver_info.city ?? order.receiver_info.city;
            order.receiver_info.country = req.body.receiver_info.country ?? order.receiver_info.country;
        }
        order.driver_id = req.body.driver_id ?? order.driver_id;
        order.warehouse_id = req.body.warehouse_id ?? order.warehouse_id;
        order.save();
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const deleteOrder = async (req, res) => {
    try {
        if (req.params.id.length !== 24) {
            return res.status(400).json({message: 'The id needs to be 24 characters long.'});
        }
        const order = await orderModel.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({message: 'The order with the given ID was not found.'});
        }
        res.status(200).json({message: 'The order was deleted.'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = { getOrders, getOrder, createOrder, updateOrder, deleteOrder };