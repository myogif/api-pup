'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [
      {
      id: 1,
      name: 'admin',
      description: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name: 'user',
      description: 'user',
      created_at: new Date(),
      updated_at: new Date()
    },
    
  ]);

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('api_keys', null, {});
  }
};