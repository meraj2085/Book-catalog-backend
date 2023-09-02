import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { BookValidation } from './books.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.Create),
  BookController.createBook
);
router.get('/', BookController.getAllBooks);
router.get('/:id/category', BookController.getBooksByCategory);
router.get('/:id', BookController.getSingleBook);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.Update),
  BookController.updateSingleBook
);

export const bookRoutes = router;
