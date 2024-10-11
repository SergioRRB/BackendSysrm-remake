import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const loginUser = async (data: { dni: string; password: string }) => {
  // Usamos findFirst para buscar al usuario por dni_usuario
  const user = await prisma.usuarios.findFirst({
    where: { dni_usuario: data.dni }, 
  });

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  // Comparamos la contraseña proporcionada
  if (user.clave_usuario !== data.password) {
    throw new Error('Contraseña incorrecta');
  }

  // Generacion del token JWT con los datos del usuario
  const token = jwt.sign(
    { id: user.id, dni: user.dni_usuario },
    'your_secret_key', // Cambia por tu clave secreta
    { expiresIn: '1h' }
  );

  return { token, userId: user.id };
};
