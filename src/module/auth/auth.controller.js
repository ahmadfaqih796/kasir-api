const User = require("../../models/user.model");
const { loginAuth } = require("./auth.service");

const register = async (req, res) => {
  try {
    const { fullname, username, password, role } = req.body;
    const user = await User.create({ fullname, username, password, role });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await loginAuth({ username, password });
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
