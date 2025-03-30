"use strict";
const { faker } = require("@faker-js/faker");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const products = [];
    for (let i = 0; i < 10000; i++) {
      products.push({
        name: faker.commerce.productName(),
        // price: faker.commerce.price(),
        price: faker.number.int({ min: 1000, max: 25000, multipleOf: 1000 }),
        stock: faker.number.int({ min: 1, max: 100 }),
        created_by: faker.number.int({ min: 1, max: 7 }),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert("products", products, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", {
      id: { [Op.gt]: 0 },
    });
  },
};
