const Product = require("../../models/product.model");
const { productInclude } = require("../../includes/product.include");
const paginate = require("../../utils/paginate");
const { Op } = require("sequelize");

const getAllProducts = async (query) => {
  const { limit, offset, page } = paginate(query);
  const whereOptions = {};

  if (query.name) {
    whereOptions.name = { [Op.like]: `%${query.name}%` };
  }
  if (query.price) {
    whereOptions.price = query.price;
  }

  const { rows: products, count: totalItems } = await Product.findAndCountAll({
    include: productInclude(query),
    limit,
    offset,
    order: [["created_at", "DESC"]],
    //  distinct: true,
    where: Object.keys(whereOptions).length > 0 ? whereOptions : undefined,
  });
  // const products = await Product.findAll({
  //    include: productInclude(query)
  // });
  return {
    page,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    data: products,
  };
};

const createProduct = async (values) => {
  const product = await Product.create(values);
  return product;
};

module.exports = { getAllProducts, createProduct };
