const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        userName: 'admin',
        fullName: 'admin',
        email: 'olawalequest@gmail.com',
        password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
        userRole: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
