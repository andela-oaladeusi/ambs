import express from 'express';
import { Artist } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const ArtistRoute = express.Router();

ArtistRoute.route('/')
  .post(Authorize.verifyToken, Artist.create)
  .get(Authorize.verifyToken, Artist.all);

ArtistRoute.route('/:id')
  .put(Authorize.verifyToken, Artist.edit)
  .delete(Authorize.verifyToken, Artist.delete)
  .get(Authorize.verifyToken, Artist.get);

export default ArtistRoute;
