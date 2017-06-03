import express from 'express';
import { Role } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const RoleRoute = express.Router();

RoleRoute.route('/')
  .post(Authorize.verifyToken, Role.create)
  .get(Authorize.verifyToken, Role.all);

RoleRoute.route('/:title')
  .put(Authorize.verifyToken, Role.edit)
  .delete(Authorize.verifyToken, Role.delete)
  .get(Authorize.verifyToken, Role.get);

export default RoleRoute;
