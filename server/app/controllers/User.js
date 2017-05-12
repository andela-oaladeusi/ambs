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
   * Route: GET /api/v1/users/:username
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  get(req, res) {
    db.User.findOne({ where: { userName: req.params.userName } })
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
   * Route: PUT /api/v1/users/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  edit(req, res) {
    db.User.findOne({ where: { userName: req.params.userName } })
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
   * Route: DELETE /api/v1/users/:title
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  delete(req, res) {
    db.User.findOne({ where: { userName: req.params.userName } })
      .then((user) => {
        if (!user) {
          return res.status(200).send({ message: 'User not found' });
        }
        user.destroy()
          .then(() => res.status(200).send({ message: 'deleted' }));
      });
  },
  /**
   * Retrive all user's favorite
   * Route: GET /api/v1/users/:title/favorites
   * @param {Object} req
   * @param {Object} res
   * @return {void | Object} response object or void
   */
  fetchUserFavorite(req, res) {
    res.status(200).send({ message: 'User Favorite' });
  }
};

export default User;
