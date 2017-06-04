module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    artistId: {
      type: DataTypes.INTEGER
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Album.belongsTo(models.User, { foreignKey: 'createdBy' });
        Album.belongsTo(models.Artist, { foreignKey: 'artistId' });
        Album.hasMany(models.Song, { foreignKey: 'albumId' });
      }
    }
  });
  return Album;
};
