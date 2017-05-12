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
    artistType: {
      type: DataTypes.STRING
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
          foreignKey: 'artistType',
          as: 'title',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Artist;
};
