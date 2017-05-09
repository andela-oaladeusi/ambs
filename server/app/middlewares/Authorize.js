import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../models';

dotenv.config({ silence: true });

const secretKey = process.env.SECRET;

const Authorize = {
  /**
   * Get token
   * @param {Object} user user's object
   * @returns {Boolean} true or false
   */
  getToken(user) {
    const userToken = jwt.sign({
      userName: user.userName,
      userRole: user.userRole
    },
      secretKey, { expiresIn: '7d' }
    );
    return userToken;
  },

 /**
   * Verify user token
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next move to next controller handler
   * @returns {void} no returns
   */
  verifyToken(req, res, next) {
    const rawToken = req.headers['x-access-token'];
    if (!rawToken) {
      return res.status(403).send({ message: 'No Token' });
    }
    const token = /^(Bearer )/.test(rawToken) ? rawToken.replace(/(Bearer )/, '') : null;
    if (token) {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'Invalid Token' });
        }
        db.User.findOne({ where: { userName: decoded.userName } })
          .then((user) => {
            if (!user) {
              return res.status(404).send({ message: 'Account not found' });
            }
            req.decoded = decoded;
            next();
          });
      });
    } else {
      return res.status(400).send({ message: 'No Token' });
    }
  },

 /**
   * Check for admin permission
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next move to next controller handler
   * @returns {Object} Object
   */
  isAdmin(req, res, next) {
    db.Role
      .findOne({ where: { title: req.decoded.userRole } })
      .then((role) => {
        if (role.title === 'admin') {
          next();
        } else {
          return res.status(403).send({ message: 'Unauthorized' });
        }
      });
  },

};

export default Authorize;
