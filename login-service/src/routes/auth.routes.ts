import { Router } from 'express';
import { loginController, logoutController } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', loginController);

// Ruta para logout
router.get('/logout', logoutController);

// Ejemplo de una ruta protegida
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Acceso autorizado', user: (req as any).user });
});

export default router;
