import express from 'express';
import { Type } from '../../app/controllers';
import { Auth, Authorize } from '../../app/middlewares';

const TypeRoute = express.Router();

TypeRoute.route('/')
  .post(Authorize.verifyToken, Auth.roleTypeInput, Type.create)
  .get(Authorize.verifyToken, Type.all);

TypeRoute.route('/:title')
  .put(Authorize.verifyToken, Auth.roleTypeUpdate, Type.edit)
  .delete(Authorize.verifyToken, Type.delete)
  .get(Authorize.verifyToken, Type.get);

TypeRoute.get('/:title/artists', Authorize.verifyToken, Type.fetchArtistType);

export default TypeRoute;
