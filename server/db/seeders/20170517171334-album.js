
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Albums', [
      {
        title: 'worship',
        description: 'worhip category',
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Albums', null, {})
};
