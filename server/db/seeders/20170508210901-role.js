
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Roles', [
      {
        title: 'admin',
        description: 'Admin role has access to do everything',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'regular',
        description: 'Default user role',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Roles', null, {})
};
