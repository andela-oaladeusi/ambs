
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
    }
  }, {
    classMethods: {
      associate: (models) => {
        Type.hasMany(models.Artist, { foreignKey: 'typeId' });
        Type.hasMany(models.Song, { foreignKey: 'typeId' });
      }
    }
  });
  return Type;
};
