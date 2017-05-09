module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Role.hasMany(models.User, { foreignKey: 'userRole' });
      }
    }
  });
  return Role;
};
