'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Blocks",[
      {
        titulo:"notas",
        descripcion:"notas del primer semestre",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        titulo:"matematicas",
        descripcion:"algoritmos por estudiar",
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Blocks",null,{})
  }
};
