
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Types', [
      {
        title: 'song',
        description: 'Audio songs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'message',
        description: `Audio messages`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'book',
        description: 'Audio books',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Types', null, {})
};
