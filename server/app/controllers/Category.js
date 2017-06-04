import db from '../models';

const Category = {
  /**
   * Create a new Category
   * Route: POST /api/v1/category
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Category.create(req.body)
      .then(category => res.status(201).send(category));
  },
  /**
   * Retrive a Category
   * Route: GET /api/v1/category/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Category.findById(req.params.id)
      .then((category) => {
        if (!category) {
          return res.status(404).send({ message: 'Category not found' });
        }
        return res.status(200).send(category);
      });
  },
  /**
   * Retrieve all Category - Search or Get all Category
   * Route: GET /api/v1/category
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Category.findAndCountAll()
      .then(categories => res.status(200).send(categories));
  },
  /**
   * Edit a new Category
   * Route: PATCH /api/v1/category/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Category.findOne({ where: { title: req.params.title } })
      .then((category) => {
        if (!category) {
          return res.status(404).send({ message: 'category not found' });
        }
        category.update(req.body)
          .then(updatedCategory => res.status(200).send(updatedCategory));
      });
  },
  /**
   * Delete a new Category
   * Route: DELETE /api/v1/category/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Category.findOne({ where: { title: req.params.title } })
      .then((category) => {
        if (!category) {
          return res.status(404).send({ message: 'Category not found' });
        }
        category.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  },
  /**
   * Retrieve all artists with a category
   * Route: GET /api/v1/categories/:id/artists
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchArtistsWithCategory(req, res) {
    db.Category.findOne({ where: { id: req.params.id }, include: [db.Artist] })
      .then(artists => res.status(200).send(artists));
  },
  /**
   * Retrieve all songs with a category
   * Route: GET /api/v1/categories/:id/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchSongsWithCategory(req, res) {
    db.Category.findOne({ where: { id: req.params.id }, include: [db.Song] })
      .then(songs => res.status(200).send(songs));
  },
};

export default Category;
