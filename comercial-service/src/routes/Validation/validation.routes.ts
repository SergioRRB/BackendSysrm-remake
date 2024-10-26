import { Router } from 'express';
import { ValidationController } from '../../controllers/Validation/validation.controller';

const router = Router();
const validationController = new ValidationController();

// Ruta para obtener todas las validaciones
router.get('/', validationController.getValidaciones.bind(validationController)); // Asegúrate de usar .bind() para mantener el contexto de `this`

export default router;
