import express from 'express';
import { Role } from '../../app/controllers';
import { Auth, Authorize } from '../../app/middlewares';

const RoleRoute = express.Router();

RoleRoute.route('/')
  .post(Authorize.verifyToken, Auth.roleTypeInput, Role.create)
  .get(Authorize.verifyToken, Role.all);

RoleRoute.route('/:title')
  .put(Authorize.verifyToken, Auth.roleTypeUpdate, Role.edit)
  .delete(Authorize.verifyToken, Role.delete)
  .get(Authorize.verifyToken, Role.get);

RoleRoute.get('/:title/users', Authorize.verifyToken, Role.fetchUserRole);

export default RoleRoute;
