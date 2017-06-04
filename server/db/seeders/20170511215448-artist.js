module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Artists', [
      {
        fullName: 'Travis',
        avatarId: 'travis',
        country: 'Nigeria',
        typeId: 1,
        categoryId: 1,
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Travis New',
        avatarId: 'travisnew',
        country: 'Nigerianew',
        typeId: 1,
        categoryId: 1,
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Travis new new',
        avatarId: 'travis new new',
        country: 'Nigeria new new',
        typeId: 1,
        categoryId: 1,
        church: 'RCCG',
        description: 'newSong',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface => queryInterface.bulkDelete('Artists', null, {})
};
