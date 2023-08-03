const data = require("../questions");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questions = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", questions, {});
  },

  async down(queryInterface, Sequelize) {

  },
};
