import { PrismaClient, clientes as Cliente } from '@prisma/client';

const prisma = new PrismaClient();

export const listarClientes = async (): Promise<Cliente[]> => {
  return prisma.clientes.findMany();
};
