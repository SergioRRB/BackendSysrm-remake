import { PrismaClient, proveedores as Provider } from '@prisma/client';

const prisma = new PrismaClient();

export const createProvider = async (data: Omit<Provider, 'id' | 'fecha_creado' | 'fecha_actualizado'>): Promise<Provider> => {
  const existingProvider = await prisma.proveedores.findFirst({
    where: { dni_proveedor: data.dni_proveedor }
  });

  if (existingProvider) {
    throw new Error('El DNI del proveedor ya está registrado');
  }

  return prisma.proveedores.create({
    data: {
      ...data,
      id_creador_proveedor: 1, // Este valor puede ser dinámico según la lógica de tu aplicación
      estado: '1',
      fecha_creado: new Date(),
      fecha_actualizado: new Date(),
    },
  });
};

export const getAllProviders = async (): Promise<Provider[]> => {
  return prisma.proveedores.findMany();
};

export const updateProvider = async (id: number, data: Partial<Omit<Provider, 'id' | 'fecha_creado' | 'fecha_actualizado'>>): Promise<Provider> => {
  return prisma.proveedores.update({
    where: { id },
    data: {
      ...data,
      fecha_actualizado: new Date(),
    },
  });
};

export const deleteProvider = async (id: number): Promise<Provider> => {
  return prisma.proveedores.delete({
    where: { id },
  });
};
