import express from 'express';
import { User } from '../../app/controllers';
import { Auth, Authorize } from '../../app/middlewares';

const UserRoute = express.Router();

UserRoute.route('/')
  .post(Auth.userInput, User.create)
  .get(Authorize.verifyToken, User.all);

UserRoute.post('/login', Auth.userUpdate, User.login);

UserRoute.post('/logout', User.logout);

UserRoute.route('/:userName')
  .put(Authorize.verifyToken, Auth.userUpdate, User.edit)
  .delete(Authorize.verifyToken, User.delete)
  .get(Authorize.verifyToken, User.get);

UserRoute.get('/:title/users', Authorize.verifyToken, User.fetchUserFavorite);

export default UserRoute;
