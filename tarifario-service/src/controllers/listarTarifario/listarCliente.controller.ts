import { Request, Response } from 'express';
import { listarClientes } from '../../services/listarTarifarioService/listarCliente.service';


export const listarClientesController = async (_req: Request, res: Response): Promise<void> => {
    try {
      const clientes = await listarClientes();
      res.status(200).json(clientes);
    } catch (error) {
      const errorMessage = (error as Error).message; // Afirmación de tipo
      res.status(500).json({ message: `Error al obtener clientes: ${errorMessage}` });
    }
  };
