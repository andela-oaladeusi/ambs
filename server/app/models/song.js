module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistId: {
      type: DataTypes.INTEGER
    },
    typeId: {
      type: DataTypes.INTEGER
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
    albumId: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    lyricId: {
      type: DataTypes.INTEGER
    },
    productionDate: {
      type: DataTypes.STRING
    },
    mediaId: {
      type: DataTypes.STRING
    },
    uploadedBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Song.belongsTo(models.Artist, {
          foreignKey: 'artistId',
          onDelete: 'CASCADE'
        });
        Song.belongsTo(models.Type, {
          foreignKey: 'typeId',
          onDelete: 'CASCADE'
        });
        Song.belongsTo(models.User, {
          foreignKey: 'uploadedBy',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Song;
};
