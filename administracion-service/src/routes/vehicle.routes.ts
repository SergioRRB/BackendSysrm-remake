import { Router } from 'express';
import { addVehicleController, listVehiclesController, updateVehicleController, deleteVehicleController } from '../controllers/vehicle.controller';
import { validateDto } from '../middlewares/validate';
import { CreateVehicleDto } from '../dtos/vehicle.dto';

const router = Router();

router.post('/create', validateDto(CreateVehicleDto), addVehicleController);
router.get('/list', listVehiclesController);
router.put('/update/:id', updateVehicleController);
router.delete('/delete/:id', deleteVehicleController);

export default router;
