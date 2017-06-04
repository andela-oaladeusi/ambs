import express from 'express';
import { User } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const UserRoute = express.Router();

UserRoute.route('/')
  .post(User.create)
  .get(Authorize.verifyToken, User.all);

UserRoute.post('/login', User.login);

UserRoute.post('/logout', User.logout);

UserRoute.route('/:id')
  .put(Authorize.verifyToken, User.edit)
  .delete(Authorize.verifyToken, User.delete)
  .get(Authorize.verifyToken, User.get);

UserRoute.get('/:id/songs', User.songUploadedByUser);

UserRoute.get('/:id/favourites/songs', User.userFavouriteSongs);

UserRoute.get('/:id/favourites/artists', User.userFavouriteArtists);

export default UserRoute;
