module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      avatarId: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      artistType: {
        type: Sequelize.STRING,
        references: {
          model: 'Types',
          key: 'title'
        }
      },
      church: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable('Artists')
};
