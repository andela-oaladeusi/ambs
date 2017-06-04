
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Types', [
      {
        title: 'song',
        description: 'Audio songs',
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'message',
        description: `Audio messages`,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'book',
        description: 'Audio books',
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Types', null, {})
};
