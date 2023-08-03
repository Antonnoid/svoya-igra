"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = [
      {
        name: "Sisadmin",
        password: "123",
        email: "2@2",
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', user, {});
  },

  async down(queryInterface, Sequelize) {},
};
