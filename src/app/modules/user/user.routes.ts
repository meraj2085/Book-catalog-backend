import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getSingleUser);
router.delete('/:id', UserController.deleteUser);
router.patch(
  '/:id',
  validateRequest(UserValidation.Update),
  UserController.updateUser
);

export const userRoutes = router;
