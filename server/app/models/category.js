module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING
    },
    typeId: {
      type: DataTypes.INTEGER
    },
    createdBy: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Category.belongsTo(models.User, { foreignKey: 'createdBy' });
        Category.belongsTo(models.Type, { foreignKey: 'typeId' });
        Category.hasMany(models.Artist, { foreignKey: 'categoryId' });
        Category.hasMany(models.Song, { foreignKey: 'categoryId' });
      }
    }
  });
  return Category;
};
