import db from '../models';

const Lyric = {
  /**
   * Create a new Lyric
   * Route: POST /api/v1/lyrics
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Lyric.create(req.body)
      .then(lyric => res.status(201).send(lyric));
  },
  /**
   * Retrive a Lyric
   * Route: GET /api/v1/lyrics/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Lyric.findOne({ where: { id: req.params.id }, include: [db.Song] })
      .then((lyric) => {
        if (!lyric) {
          return res.status(404).send({ message: 'Lyric not found' });
        }
        return res.status(200).send(lyric);
      });
  },
  /**
   * Retrieve all Lyric - Search or Get all Album
   * Route: GET /api/v1/lyrics
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Lyric.findAndCountAll({ include: [db.Song] })
      .then(lyrics => res.status(200).send(lyrics));
  },
  /**
   * Edit a new Lyric
   * Route: PUT /api/v1/lyrics/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Lyric.findOne({ where: { title: req.params.title } })
      .then((lyric) => {
        if (!lyric) {
          return res.status(404).send({ message: 'lyric not found' });
        }
        lyric.update(req.body)
          .then(updatedLyric => res.status(200).send(updatedLyric));
      });
  },
  /**
   * Delete a new Lyric
   * Route: DELETE /api/v1/lyrics/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Lyric.findOne({ where: { title: req.params.title } })
      .then((lyric) => {
        if (!lyric) {
          return res.status(404).send({ message: 'Lyric not found' });
        }
        Lyric.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  }
};

export default Lyric;
