import db from '../models';

const Favourite = {
  /**
   * Create a new Favourite
   * Route: POST /api/v1/favourites
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.Favourite.create(req.body)
      .then(favourite => res.status(201).send(favourite));
  },
  /**
   * Retrive a Favourite
   * Route: GET /api/v1/favourites/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.Favourite.findById(req.params.id)
      .then((favourite) => {
        if (!favourite) {
          return res.status(404).send({ message: 'favourite not found' });
        }
        return res.status(200).send(favourite);
      });
  },
  /**
   * Retrieve all favourite - Search or Get all favourite
   * Route: GET /api/v1/favourites
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.Favourite.findAndCountAll()
      .then(favourites => res.status(200).send(favourites));
  },
  /**
   * Edit a new favourite
   * Route: PUT /api/v1/favourites/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.Favourite.findOne({ where: { title: req.params.title } })
      .then((favourite) => {
        if (!favourite) {
          return res.status(404).send({ message: 'favourite not found' });
        }
        favourite.update(req.body)
          .then(updatedFavourite => res.status(200).send(updatedFavourite));
      });
  },
  /**
   * Delete a new Favourite
   * Route: DELETE /api/v1/favourites/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.Favourite.findOne({ where: { title: req.params.title } })
      .then((favourite) => {
        if (!favourite) {
          return res.status(404).send({ message: 'favourite not found' });
        }
        favourite.destroy()
          .then(() => res.status(200).send({ message: 'Deleted' }));
      });
  }
};

export default Favourite;
