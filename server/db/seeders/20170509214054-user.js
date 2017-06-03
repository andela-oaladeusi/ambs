const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        userName: 'admin',
        fullName: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        userRole: 'admin',
        avatarId: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'moderator',
        fullName: 'moderator',
        email: 'moderator@gmail.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        userRole: 'moderator',
        avatarId: 'moderator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'regular',
        fullName: 'regular',
        email: 'regular@gmail.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        userRole: 'regular',
        avatarId: 'regular',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
