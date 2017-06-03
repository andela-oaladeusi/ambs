module.exports = (sequelize, DataTypes) => {
  const Lyric = sequelize.define('Lyric', {
    songId: {
      type: DataTypes.INTEGER
    },
    albumId: {
      type: DataTypes.INTEGER
    },
    artistId: {
      type: DataTypes.INTEGER
    },
    lyric: {
      type: DataTypes.TEXT
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Lyric;
};
