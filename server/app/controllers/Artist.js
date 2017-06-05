import db from '../models';

const Artist = {
  /**
   * Create a new Artist
   * Route: POST /api/v1/artists
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Artist.create(req.body)
      .then(type => res.status(201).send(type));
  },
  /**
   * Retrive a artist
   * Route: GET /api/v1/artists/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Artist.findById(req.params.id)
      .then((artist) => {
        if (!artist) {
          return res.status(404).send({ message: 'Artist not found' });
        }
        return res.status(200).send(artist);
      });
  },
  /**
   * Retrieve all Artists - Search or Get all artists
   * Route: GET /api/v1/artists
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Artist.findAndCountAll()
      .then(artists => res.status(200).send(artists));
  },
  /**
   * Edit an artist
   * Route: PUT /api/v1/artists/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Artist.findById(req.params.id)
      .then((artist) => {
        if (!artist) {
          return res.status(404).send({ message: 'Artist not found' });
        }
        artist.update(req.body)
          .then(updatedArtist => res.status(200).send(updatedArtist));
      });
  },
  /**
   * Delete an artist
   * Route: DELETE /api/v1/artists/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Artist.findById(req.params.id)
      .then((artist) => {
        if (!artist) {
          return res.status(404).send({ message: 'Artist not found' });
        }
        artist.destroy()
          .then(() => res.status(200).send({ message: 'Artist not found' }));
      });
  },
  /**
   * Retrieve all Users that has a particular artist as their favourite
   * Route: GET /api/v1/artists/:id/favourites/users
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  usersArtistFavourite(req, res) {
    db.Artist.findOne({ where: { id: req.params.id }, include: [{ model: db.Favourite, attributes: ['userId'] }] })
      .then(favouriteUsers => res.status(200).send(favouriteUsers));
  },
  /**
   * Retrieve all Songs that belongs to a particular artist
   * Route: GET /api/v1/artists/:id/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchArtistSongs(req, res) {
    db.Artist.findOne({ where: { id: req.params.id }, include: [db.Song] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Retrieve all Album that belongs to a particular artist
   * Route: GET /api/v1/artists/:id/albums
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchArtistAlbums(req, res) {
    db.Artist.findOne({ where: { id: req.params.id }, include: [db.Album] })
      .then(albums => res.status(200).send(albums));
  },
};

export default Artist;
