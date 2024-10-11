import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service';
import { LoginUserDto } from '../dtos/auth.dto';
import { validate } from 'class-validator';

export const loginController = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginUserDto = Object.assign(new LoginUserDto(), req.body);

    // Validar los datos de login
    const errors = await validate(loginUserDto);
    if (errors.length > 0) {
      res.status(400).json({
        errors: errors.map(err => ({
          property: err.property,
          constraints: err.constraints || {},
        })),
      });
      return;
    }

    // Iniciar sesión y obtener el token
    const { token, userId } = await loginUser(req.body);

    // Almacenar el token JWT en una cookie HTTP
    res.cookie('token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 3600000, // La cookie expira en 1 hora
    });

    res.status(200).json({ token, userId });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const logoutController = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie('jwt', { httpOnly: true, secure: true });
    res.status(200).json({ message: 'Logout exitoso' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error al cerrar sesión' });
  }
};
