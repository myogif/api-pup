'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('users', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false, 
      }, 
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      }, 
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      }, 
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      no_hp: {
        type: Sequelize.INTEGER(20),
        allowNull: false,
      }, 
      alamat: {
        type: Sequelize.STRING(100),
        allowNull: false
      }, created_at:{
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: true,
      }
      });

      await queryInterface.addConstraint('users',{
        type: 'foreign key',
        name: 'user_role_id',
        fields: ['role_id'], 
        references:{
          table: 'roles',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
