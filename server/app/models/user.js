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
    avatarId: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate(models) {
        User.belongsTo(models.Role, {
          foreignKey: 'userRole',
          as: 'title',
          onDelete: 'CASCADE'
        });
        User.hasMany(models.Song, { foreignKey: 'uploadedBy' });
        User.hasMany(models.Type, { foreignKey: 'createdBy' });
        User.hasMany(models.Lyric, { foreignKey: 'createdBy' });
        User.hasMany(models.Favourite, { foreignKey: 'userId' });
        User.hasMany(models.Album, { foreignKey: 'createdBy' });
        User.hasMany(models.Artist, { foreignKey: 'createdBy' });
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
