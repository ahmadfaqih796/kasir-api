const { createUser, getAllUsers } = require('./user.service');

const createUserHandler = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllUsersHandler = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

module.exports = { createUserHandler, getAllUsersHandler };