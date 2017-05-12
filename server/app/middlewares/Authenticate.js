import { Role, User } from '../../validateInputs';
import db from '../models';

const Auth = {

  /**
   * Authenticate input from the user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @return {void | Object} response object or void
   */
  roleTypeInput(req, res, next) {
    const { isValid, errors } = Role.input(req.body, 'create');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },

  /**
   * Authenticate input from the user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @return {void | Object} response object or void
   */
  roleTypeUpdate(req, res, next) {
    const { isValid, errors } = Role.input(req.body, 'update');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },

  /**
   * Authenticate input from the user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @return {void | Object} response object or void
   */
  userInput(req, res, next) {
    const { isValid, errors } = User.input(req.body, 'create');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    db.User.findOne({ where: { $or: [
      { userName: req.body.userName },
      { email: req.body.email }]
    } })
      .then((user) => {
        if (user) {
          return res.status(400).send({ message: 'User already exists' });
        }
        next();
      });
  },

  /**
   * Authenticate input from the user
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @return {void | Object} response object or void
   */
  userUpdate(req, res, next) {
    const { isValid, errors } = User.input(req.body, 'update');
    if (!isValid) {
      return res.status(400).send(errors);
    }
    next();
  },
};

export default Auth;
