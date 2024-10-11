import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Middleware para verificar si el token JWT es válido
export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies['token'];

  if (!token) {
    res.status(401).json({ message: 'Token no proporcionado. Acceso denegado' });
    return; 
  }
  // Verifica el token
  jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    (req as any).user = decoded;
    next();
  });
};
