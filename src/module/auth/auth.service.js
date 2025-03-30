const User = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAuth = async (values) => {
  const user = await User.findOne({ where: { username: values.username } });
  const { password, ...rest } = user.dataValues;

  if (!user) {
    throw new Error("User not found");
  }

  if (!(await bcrypt.compare(values.password, password))) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    user: rest,
    token,
  };
};

module.exports = {
  loginAuth,
};
