// usuario-service/src/routes/user.routes.ts
import { Router } from 'express';
import { addUserController, listUsersController, updateUserController, deleteUserController } from '../controllers/user.controller';
import { validateDto } from '../middlewares/validate';
import { CreateUserDto } from '../dtos/user.dto';

const router = Router();

router.post('/create', validateDto(CreateUserDto), addUserController);
router.get('/list', listUsersController);
router.put('/update/:id', updateUserController);
router.delete('/delete/:id', deleteUserController);

export default router;
