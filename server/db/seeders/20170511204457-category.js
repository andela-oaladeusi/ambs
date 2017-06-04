
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Categories', [
      {
        title: 'worship',
        description: 'worhip category',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'praise',
        description: 'Praise',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {})
};
