import express from 'express';
import { Category } from '../../app/controllers';
import { Authorize } from '../../app/middlewares';

const CategoryRoute = express.Router();

CategoryRoute.route('/')
  .post(Authorize.verifyToken, Category.create)
  .get(Authorize.verifyToken, Category.all);

CategoryRoute.route('/:id')
  .put(Authorize.verifyToken, Category.edit)
  .delete(Authorize.verifyToken, Category.delete)
  .get(Authorize.verifyToken, Category.get);

export default CategoryRoute;
