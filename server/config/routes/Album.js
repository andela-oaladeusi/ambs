import express from 'express';
import { Album } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const AlbumRoute = express.Router();

AlbumRoute.route('/')
  .post(Authorize.verifyToken, Album.create)
  .get(Authorize.verifyToken, Album.all);

AlbumRoute.route('/:id')
  .put(Authorize.verifyToken, Album.edit)
  .delete(Authorize.verifyToken, Album.delete)
  .get(Authorize.verifyToken, Album.get);

export default AlbumRoute;
