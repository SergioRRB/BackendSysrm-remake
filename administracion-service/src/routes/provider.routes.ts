import { Router } from 'express';
import { addProviderController, listProvidersController, updateProviderController, deleteProviderController } from '../controllers/provider.controller';
import { validateDto } from '../middlewares/validate';
import { CreateProviderDto, UpdateProviderDto } from '../dtos/provider.dto';

const router = Router();

router.post(
  '/create',
  validateDto(CreateProviderDto),
  addProviderController
);
router.get('/list', listProvidersController);
router.put(
  '/update/:id',
  validateDto(UpdateProviderDto),
  updateProviderController
);
router.delete('/delete/:id', deleteProviderController);

export default router;
