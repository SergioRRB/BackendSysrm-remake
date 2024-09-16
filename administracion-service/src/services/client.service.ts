import { PrismaClient, clientes as Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export const createClient = async (data: Omit<Cliente, 'id'>): Promise<Cliente> => {
  return prisma.clientes.create({
    data: {
      ...data,
      fecha_creado: new Date(),
      fecha_actualizado: new Date()
    },
  });
};

//* Obtener un cliente
export const getAllClients = async (): Promise<Cliente[]> => {
  return prisma.clientes.findMany();
};

//* Actualizar cliente
export const updateClient = async (id: number, data: Partial<Omit<Cliente, 'id'>>
): Promise<Cliente> => {
  return prisma.clientes.update({
    where: { id },
    data: {
      ...data,
      fecha_actualizado: new Date()
    },
  });
};

//* Eliminar cliente
export const deleteClient = async (id: number): Promise<Cliente> => {
  return prisma.clientes.delete({
    where: { id },
  });
};