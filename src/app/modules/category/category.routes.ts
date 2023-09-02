import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidation.Add),
  CategoryController.createCategory
);
router.get('/', CategoryController.getAllCategory);
router.get('/:id', CategoryController.getSingleCategory);
router.delete('/:id', CategoryController.deleteCategory);
router.patch(
  '/:id',
  validateRequest(CategoryValidation.Update),
  CategoryController.updateCategory
);

export const categoryRoutes = router;
