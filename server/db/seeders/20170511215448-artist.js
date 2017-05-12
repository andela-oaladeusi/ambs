module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Artists', [
      {
        fullName: 'Travis',
        avatarId: 'travis',
        country: 'Nigeria',
        artistType: 'song',
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Travis New',
        avatarId: 'travisnew',
        country: 'Nigerianew',
        artistType: 'message',
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Travis new new',
        avatarId: 'travis new new',
        country: 'Nigeria new new',
        artistType: 'book',
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Artists', null, {})
};
