import { Router } from 'express';
import { addAreaController, listAreasController, updateAreaController, deleteAreaController } from '../controllers/area.controller';
import { validateDto } from '../middlewares/validate';
import { CreateAreaDto, UpdateAreaDto } from '../dtos/area.dto';

const router = Router();

router.post(
  '/create',
  validateDto(CreateAreaDto),
  addAreaController
);
router.get('/list', listAreasController);
router.put(
  '/update/:id',
  validateDto(UpdateAreaDto),
  updateAreaController
);
router.delete('/delete/:id', deleteAreaController);

export default router;
