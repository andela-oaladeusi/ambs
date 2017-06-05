import db from '../models';
import { Authorize } from '../middlewares';

const User = {
  /**
   * Create a new user
   * Route: POST /api/v1/users
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  create(req, res) {
    db.User.create(req.body)
      .then(user => res.status(201).send({ message: 'created', user }));
  },
  /**
   * Login
   * Route: POST /api/v1/users/login
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  login(req, res) {
    db.User.findOne({ where: { $or: [
        { userName: req.body.userName },
        { email: req.body.email }]
    } })
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Provide valid details' });
      }
      if (user.validPassword(req.body.password)) {
        const token = Authorize.getToken(user);
        return res.status(200).send({ message: 'Logged in', token });
      }
    });
  },
  /**
   * Logout
   * Route: POST /api/v1/users/logout
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  logout(req, res) {
    res.status(200).send({ message: 'Logged Out' });
  },
  /**
   * Retrive a user
   * Route: GET /api/v1/users/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.User.findById(req.params.id)
      .then((foundUser) => {
        if (!foundUser) {
          return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).send({ message: 'found', foundUser });
      });
  },
  /**
   * Search or Get all Users
   * Route: GET /api/v1/users
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  all(req, res) {
    db.User.findAndCountAll()
      .then(users => res.status(200).send({ users }));
  },
  /**
   * Edit a user
   * Route: PUT /api/v1/users/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.User.findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(200).send({ message: 'User not found' });
        }
        user.update(req.body)
          .then(editedUser => res.status(200).send({ editedUser }));
      });
  },
  /**
   * Delete a user
   * Route: DELETE /api/v1/users/:id
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.User.findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(200).send({ message: 'User not found' });
        }
        user.destroy()
          .then(() => res.status(200).send({ message: 'deleted' }));
      });
  },
  /**
   * Get all media uploaded by a user
   * Route: GET /api/v1/users/:id/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  songUploadedByUser(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [db.Song] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's favourite songs
   * Route: GET /api/v1/users/:id/favourite/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userFavouriteSongs(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Favourite, attributes: ['songId'] }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's favourite songs
   * Route: GET /api/v1/users/:id/favourite/songs
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userFavouriteArtists(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Favourite, attributes: ['artistId'] }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's created lyrics
   * Route: GET /api/v1/users/:id/created/lyrics
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userCreatedLyrics(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Lyric }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's created albums
   * Route: GET /api/v1/users/:id/created/albums
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userCreatedAlbums(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Album }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's created artists
   * Route: GET /api/v1/users/:id/created/artists
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userCreatedArtists(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Artist }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's created type
   * Route: GET /api/v1/users/:id/created/types
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userCreatedTypes(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Type }] })
      .then(songs => res.status(200).send(songs));
  },
  /**
   * Get all user's created categories
   * Route: GET /api/v1/users/:id/created/categories
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  userCreatedCategories(req, res) {
    db.User.findOne({ where: { id: req.params.id }, include: [{ model: db.Category }] })
      .then(songs => res.status(200).send(songs));
  }
};

export default User;
