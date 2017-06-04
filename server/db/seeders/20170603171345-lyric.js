
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Lyrics', [
      {
        songId: 1,
        artistId: 1,
        lyric: 'new new lyrics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Lyrics', null, {})
};
