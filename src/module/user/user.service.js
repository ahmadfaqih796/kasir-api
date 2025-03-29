const User = require('../../models/user.model');

const createUser = async (username, role) => {
    return await User.create({ username, role });
};

const getAllUsers = async () => {
    return await User.findAll();
};

module.exports = { createUser, getAllUsers };