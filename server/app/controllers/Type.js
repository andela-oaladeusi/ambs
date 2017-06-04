import db from '../models';

const Type = {
  /**
   * Create a new type
   * Route: POST /api/v1/type
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Type.create(req.body)
      .then(type => res.status(201).send(type));
  },
  /**
   * Retrive a type
   * Route: GET /api/v1/types/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Type.findById(req.params.id)
      .then((type) => {
        if (!type) {
          return res.status(404).send({ message: 'Type not found' });
        }
        return res.status(200).send(type);
      });
  },
  /**
   * Retrieve all types - Search or Get all types
   * Route: GET /api/v1/types
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Type.findAndCountAll()
      .then(types => res.status(200).send(types));
  },
  /**
   * Edit a new type
   * Route: PUT /api/v1/types/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Type.findById(req.params.id)
      .then((type) => {
        if (!type) {
          return res.status(404).send({ message: 'Type not found' });
        }
        type.update(req.body)
          .then(updatedType => res.status(200).send(updatedType));
      });
  },
  /**
   * Delete a new type
   * Route: DELETE /api/v1/types/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Type.findById(req.params.id)
      .then((type) => {
        if (!type) {
          return res.status(404).send({ message: 'Role not found' });
        }
        type.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  },
  /**
   * Retrieve all artists that belongs to a type
   * Route: GET /api/v1/types/:id/artists
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchAllArtistsWithAType(req, res) {
    db.Type.findOne({ where: { id: req.params.id }, include: [db.Artist] })
      .then(artists => res.status(200).send(artists));
  },
  /**
   * Retrieve all songs that belongs to a type
   * Route: GET /api/v1/types/:id/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchAllSongsWithAType(req, res) {
    db.Type.findOne({ where: { id: req.params.id }, include: [db.Song] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Retrieve all categories that belongs to a type
   * Route: GET /api/v1/types/:id/categories
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchAllCategoriesWithAType(req, res) {
    db.Type.findOne({ where: { id: req.params.id }, include: [db.Category] })
      .then(categories => res.status(200).send(categories));
  },
};

export default Type;
