import { PrismaClient, vehiculos as Vehicle } from '@prisma/client';

const prisma = new PrismaClient();

export const createVehicle = async (data: Omit<Vehicle, 'id' | 'fecha_creado' | 'fecha_actualizado'>): Promise<Vehicle> => {
  return prisma.vehiculos.create({
    data: {
      ...data,
      id_creador_vehiculo: 1, // Valor dinámico según la lógica de tu aplicación
      estado: '1',
      fecha_creado: new Date(),
      fecha_actualizado: new Date(),
    },
  });
};

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  return prisma.vehiculos.findMany();
};

export const updateVehicle = async (id: number, data: Partial<Omit<Vehicle, 'id' | 'fecha_creado' | 'fecha_actualizado'>>): Promise<Vehicle> => {
  return prisma.vehiculos.update({
    where: { id },
    data: {
      ...data,
      fecha_actualizado: new Date(),
    },
  });
};

export const deleteVehicle = async (id: number): Promise<Vehicle> => {
  return prisma.vehiculos.delete({
    where: { id },
  });
};
