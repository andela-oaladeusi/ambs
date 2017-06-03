import express from 'express';
import { Favourite } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const FavouriteRoute = express.Router();

FavouriteRoute.route('/')
  .post(Authorize.verifyToken, Favourite.create)
  .get(Authorize.verifyToken, Favourite.all);

FavouriteRoute.route('/:id')
  .put(Authorize.verifyToken, Favourite.edit)
  .delete(Authorize.verifyToken, Favourite.delete)
  .get(Authorize.verifyToken, Favourite.get);

export default FavouriteRoute;
