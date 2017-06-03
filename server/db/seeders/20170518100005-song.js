
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Songs', [
      {
        title: 'Intentional',
        artistId: 1,
        typeId: 1,
        categoryId: 1,
        albumId: 1,
        description: 'All things are working for my good',
        lyricId: 1,
        productionDate: '01/01/2017',
        mediaId: 'song-1234567890',
        uploadedBy: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Songs', null, {})
};
