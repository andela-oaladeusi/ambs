import express from 'express';
import { User } from '../../app/controllers';

const UserRoute = express.Router();

UserRoute.route('/')
  .post(User.create)
  .get(User.all);

UserRoute.route('/:title')
  .put(User.edit)
  .delete(User.delete)
  .get(User.get);

UserRoute.get('/:title/users', User.fetchUserFavorite);

export default UserRoute;
