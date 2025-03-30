const User = require('../../models/user.model');

const createUser = async (values) => {
    return await User.create(values);
};

const getAllUsers = async () => {
    return await User.findAll();
};

module.exports = { createUser, getAllUsers };