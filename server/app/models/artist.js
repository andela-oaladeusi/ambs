module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avatarId: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    typeId: {
      type: DataTypes.INTEGER
    },
    categoryId: {
      type: DataTypes.INTEGER
    },
    church: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Artist.belongsTo(models.Type, {
          foreignKey: 'typeId',
          onDelete: 'CASCADE'
        });
        Artist.hasMany(models.Song, { foreignKey: 'artistId' });
        Artist.belongsTo(models.User, { foreignKey: 'createdBy' });
        Artist.belongsTo(models.Type, { foreignKey: 'typeId' });
        Artist.belongsTo(models.Category, { foreignKey: 'categoryId' });
        Artist.hasMany(models.Lyric, { foreignKey: 'artistId' });
        Artist.hasMany(models.Favourite, { foreignKey: 'artistId' });
        Artist.hasMany(models.Album, { foreignKey: 'artistId' });
      }
    }
  });
  return Artist;
};
