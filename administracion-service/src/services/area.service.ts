import { PrismaClient, areas as Area } from '@prisma/client';

const prisma = new PrismaClient();

export const createArea = async (data: Omit<Area, 'id' | 'fecha_creado' | 'fecha_actualizado'>): Promise<Area> => {
  return prisma.areas.create({
    data: {
      ...data,
      id_creador_area: 1, // Este valor puede ser dinámico según la lógica de tu aplicación
      estado: '1',
      fecha_creado: new Date(),
      fecha_actualizado: new Date(),
    },
  });
};

export const getAllAreas = async (): Promise<Area[]> => {
  return prisma.areas.findMany();
};

export const updateArea = async (id: number, data: Partial<Omit<Area, 'id' | 'fecha_creado' | 'fecha_actualizado'>>): Promise<Area> => {
  return prisma.areas.update({
    where: { id },
    data: {
      ...data,
      fecha_actualizado: new Date(),
    },
  });
};

export const deleteArea = async (id: number): Promise<Area> => {
  return prisma.areas.delete({
    where: { id },
  });
};
