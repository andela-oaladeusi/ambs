import express from 'express';
import { Role } from '../../app/controllers';
import { Auth } from '../../app/middlewares';

const RoleRoute = express.Router();

RoleRoute.route('/')
  .post(Auth.roleInput, Role.create)
  .get(Role.all);

RoleRoute.route('/:title')
  .put(Auth.roleUpdate, Role.edit)
  .delete(Role.delete)
  .get(Role.get);

RoleRoute.get('/:title/users', Role.fetchUserRole);

export default RoleRoute;
