const User = require("../models/user.model");
const R = require("ramda");
const { Op } = require("sequelize");

const productInclude = (query = {}) => {
  const whereOptions = {};

  if (query.fullname) {
    whereOptions.fullname = { [Op.like]: `%${query.fullname}%` };
  }

  if (query.price) {
    whereOptions.price = query.price;
  }
  return [
    {
      model: User,
      as: "creator",
      attributes: ["id", "fullname", "username", "role"],
      where: Object.keys(whereOptions).length > 0 ? whereOptions : undefined,
    },
  ];
};

const addIncludes = (extraIncludes = [], query = {}) =>
  R.concat(productInclude(query), extraIncludes);

module.exports = {
  productInclude,
  addIncludes,
};
