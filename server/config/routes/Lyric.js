import express from 'express';
import { Lyric } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const LyricRoute = express.Router();

LyricRoute.route('/')
  .post(Authorize.verifyToken, Lyric.create)
  .get(Authorize.verifyToken, Lyric.all);

LyricRoute.route('/:id')
  .put(Authorize.verifyToken, Lyric.edit)
  .delete(Authorize.verifyToken, Lyric.delete)
  .get(Authorize.verifyToken, Lyric.get);

export default LyricRoute;
