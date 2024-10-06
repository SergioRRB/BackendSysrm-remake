// usuario-service/src/routes/user.routes.ts
import { Router } from 'express';
import { addUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/user.controller';
import { validateDto } from '../middlewares/validate';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { verifyToken } from '../../../login-service/src/middlewares/auth.middleware';

const router = Router();

//* Crear un usuario
router.post(
  '/create',
  validateDto(CreateUserDto),
  addUserController
);

router.get('/list', verifyToken, listUsersController);


router.put(
  '/update/:id',
  validateDto(UpdateUserDto),
  updateUserController
);


router.delete('/delete/:id', deleteUserController);

export default router;
