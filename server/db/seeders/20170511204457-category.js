
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Categories', [
      {
        title: 'worship',
        description: 'worhip category',
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'praise',
        description: 'Praise',
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {})
};
