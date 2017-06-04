module.exports = (sequelize, DataTypes) => {
  const Lyric = sequelize.define('Lyric', {
    songId: {
      type: DataTypes.INTEGER
    },
    artistId: {
      type: DataTypes.INTEGER
    },
    lyric: {
      type: DataTypes.TEXT
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Lyric.belongsTo(models.Song, { foreignKey: 'songId' });
        Lyric.belongsTo(models.User, { foreignKey: 'createdBy' });
      }
    }
  });
  return Lyric;
};
