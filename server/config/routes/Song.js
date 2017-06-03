import express from 'express';
import { Song } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const SongRoute = express.Router();

SongRoute.route('/')
  .post(Authorize.verifyToken, Song.create)
  .get(Authorize.verifyToken, Song.all);

SongRoute.route('/:id')
  .put(Authorize.verifyToken, Song.edit)
  .delete(Authorize.verifyToken, Song.delete)
  .get(Authorize.verifyToken, Song.get);



export default SongRoute;
