import { Router } from 'express';
import { listarClientesController } from '../../controllers/listarTarifario/listarCliente.controller';

const router = Router();

// Ruta para listar todos los clientes
router.get('/clientes', listarClientesController);

export default router;
