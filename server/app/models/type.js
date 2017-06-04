
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        Type.hasMany(models.Artist, { foreignKey: 'typeId' });
        Type.hasMany(models.Category, { foreignKey: 'typeId' });
        Type.hasMany(models.Song, { foreignKey: 'typeId' });
        Type.belongsTo(models.User, { foreignKey: 'createdBy' });
      }
    }
  });
  return Type;
};
