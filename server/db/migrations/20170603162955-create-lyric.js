module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Lyrics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Songs',
          key: 'id'
        }
      },
      artistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Artists',
          key: 'id'
        }
      },
      lyric: {
        type: Sequelize.TEXT
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
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
  down: queryInterface => queryInterface.dropTable('Lyrics')
};
