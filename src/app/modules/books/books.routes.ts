import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { BookValidation } from './books.validation';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidation.Create),
  BookController.createBook
);
router.get('/', BookController.getAllBooks);
router.get('/:id/category', BookController.getBooksByCategory);
router.get('/:id', BookController.getSingleBook);
router.delete('/:id', BookController.deleteBook);
router.patch(
  '/:id',
  validateRequest(BookValidation.Update),
  BookController.updateSingleBook
);

export const bookRoutes = router;
