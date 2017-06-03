import db from '../models';

const Song = {
  /**
   * Create a new Song
   * Route: POST /api/v1/song
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Song.create(req.body)
      .then(song => res.status(201).send(song));
  },
  /**
   * Retrive Song
   * Route: GET /api/v1/song/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Song.findById(req.params.id)
      .then((song) => {
        if (!song) {
          return res.status(404).send({ message: 'Song not found' });
        }
        return res.status(200).send(song);
      });
  },
  /**
   * Retrieve all Song - Search or Get all Song
   * Route: GET /api/v1/Song
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Song.findAndCountAll()
      .then(song => res.status(200).send(song));
  },
 /**
   * Edit Song
   * Route: PUT /api/v1/song/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Song.findById(req.params.id)
      .then((song) => {
        if (!song) {
          return res.status(404).send({ message: 'Music not found' });
        }
        song.update(req.body)
          .then(updatedSong => res.status(200).send(updatedSong));
      });
  },
  /**
   * Delete Song
   * Route: DELETE /api/v1/song/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Song.findById(req.params.id)
      .then((song) => {
        if (!song) {
          return res.status(404).send({ message: 'Song not found' });
        }
        song.destroy()
          .then(() => res.status(200).send({ message: 'Song not found' }));
      });
  }
};

export default Song;
