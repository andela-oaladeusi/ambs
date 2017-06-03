import db from '../models';

const Album = {
  /**
   * Create a new Albums
   * Route: POST /api/v1/albums
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Album.create(req.body)
      .then(album => res.status(201).send(album));
  },
  /**
   * Retrive a Album
   * Route: GET /api/v1/albums/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Album.findById(req.params.id)
      .then((album) => {
        if (!album) {
          return res.status(404).send({ message: 'Album not found' });
        }
        return res.status(200).send(album);
      });
  },
  /**
   * Retrieve all Album - Search or Get all Album
   * Route: GET /api/v1/albums
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Album.findAndCountAll()
      .then(albums => res.status(200).send(albums));
  },
  /**
   * Edit a new Album
   * Route: PUT /api/v1/album/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Album.findOne({ where: { title: req.params.title } })
      .then((album) => {
        if (!album) {
          return res.status(404).send({ message: 'album not found' });
        }
        album.update(req.body)
          .then(updatedAlbum => res.status(200).send(updatedAlbum));
      });
  },
  /**
   * Delete a new Album
   * Route: DELETE /api/v1/album/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Album.findOne({ where: { title: req.params.title } })
      .then((album) => {
        if (!album) {
          return res.status(404).send({ message: 'Album not found' });
        }
        Album.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  }
};

export default Album;
