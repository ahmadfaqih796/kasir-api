require("dotenv").config();
const { Sequelize } = require("sequelize");
const operators = require('./operators');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false,
    operatorsAliases: operators,
    define: {
      freezeTableName: true,
      underscored: true,
    //   paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    },
  }
);

module.exports = sequelize;
