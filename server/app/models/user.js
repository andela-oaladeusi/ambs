import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userRole: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'regular'
    },
    about: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate(models) {
        User.belongsTo(models.Role, {
          foreignKey: 'userRole',
          onDelete: 'CASCADE'
        });
      }
    },

    instanceMethods: {
      generateHash() {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },

    hooks: {
      beforeCreate(user) {
        user.generateHash();
      },
      beforeUpdate(user) {
        if (user._changed.password) {
          user.generateHash();
        }
      }
    }
  });
  return User;
};
