
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Roles', [
      {
        title: 'admin',
        description: 'Admin role: create, edit, publish, view, delete, disable all, ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'moderator',
        description: `Moderator role: create, edit, publish, view, disable contents`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'regular',
        description: 'Regular role: view, follow contents',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Roles', null, {})
};
