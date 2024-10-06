import { PrismaClient, usuarios as Usuario } from '@prisma/client';

const prisma = new PrismaClient();

//* Crear un usuario
export const createUser = async (data: Omit<Usuario, 'id' | 'fecha_creado' | 'fecha_actualizado'>): Promise<Usuario> => {
  // Verifica si ya existe un usuario con el mismo DNI
  const existingUser = await prisma.usuarios.findFirst({
    where: { dni_usuario: data.dni_usuario }
  });

  if (existingUser) {
    throw new Error('El DNI ya está registrado');
  }

  return prisma.usuarios.create({
    data: {
      ...data,
      conectado: '1',
      id_creador_usuario: 1,
      estado: '1',
      fecha_creado: new Date(),
      fecha_actualizado: new Date()
    },
  });
};
//* Obtener un usuario
export const getAllUsers = async (): Promise<Usuario[]> => {
  return prisma.usuarios.findMany();
};

//* Actualizar usuarios
export const updateUser = async (id: number, data: Partial<Omit<Usuario, 'id' | 'fecha_creado' | 'fecha_actualizado'>>): Promise<Usuario> => {
  return prisma.usuarios.update({
    where: { id },
    data: {
      ...data,
      fecha_actualizado: new Date()
    },
  });
};

//* Elimar usuarios
export const deleteUser = async (id: number): Promise<Usuario> => {
  return prisma.usuarios.delete({
    where: { id },
  });
};


