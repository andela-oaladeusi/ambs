import express from 'express';
import { Role } from '../../app/controllers';
import { ValidateInput } from '../../app/middlewares';

const RoleRoute = express.Router();

RoleRoute.route('/')
  .post(ValidateInput.roleInput, Role.create)
  .get(Role.all);

RoleRoute.route('/:title')
  .put(Role.edit)
  .delete(Role.delete)
  .get(Role.get);

RoleRoute.get('/:title/users', Role.fetchUserRole);

export default RoleRoute;
