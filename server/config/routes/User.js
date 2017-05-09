import express from 'express';
import { User } from '../../app/controllers';
import { Auth, Authorize } from '../../app/middlewares';

const UserRoute = express.Router();

UserRoute.route('/')
  .post(Auth.userInput, User.create)
  .get(Authorize.verifyToken, User.all);

UserRoute.post('/login', Auth.userUpdate, User.login);

UserRoute.post('/logout', User.logout);

UserRoute.route('/:title')
  .put(Auth.userUpdate, User.edit)
  .delete(User.delete)
  .get(User.get);

UserRoute.get('/:title/users', User.fetchUserFavorite);

export default UserRoute;
