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
    church: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: (models) => {
        Artist.belongsTo(models.Type, {
          foreignKey: 'typeId',
          onDelete: 'CASCADE'
        });
        Artist.hasMany(models.Song, { foreignKey: 'artistId' });
      }
    }
  });
  return Artist;
};
