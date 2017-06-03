module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Favourites', [
      {
        userId: 1,
        songId: 1,
        albumId: 1,
        artistId: 1,
        typeId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Favourites', null, {})
};
