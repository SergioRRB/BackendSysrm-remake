import { Request, Response } from 'express';
import { createClient, getAllClients, updateClient, deleteClient } from '../services/client.service';
import { CreateClientDto, UpdateClientDto } from '../dtos/client.dto';
import { validate } from 'class-validator';

export const addClientController = async (req: Request, res: Response): Promise<void> => {
  try {
    const createClientDto = Object.assign(new CreateClientDto(), req.body);
    const errors = await validate(createClientDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const newClient = await createClient(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'El DNI ya está registrado') {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: `Error al crear cliente: ${error.message}` });
      }
    } else {
      res.status(500).json({ message: `Error desconocido al crear cliente` });
    }
  }
};

export const listClientsController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const clients = await getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al obtener clientes: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al obtener clientes` });
    }
  }
};

// Controlador para actualizar cliente
export const updateClientController = async (req: Request, res: Response): Promise<void> => {
  try {
    const clientId = parseInt(req.params.id, 10);
    if (isNaN(clientId)) {
      res.status(400).json({ message: "ID de cliente no válido" });
      return;
    }

    const updateClientDto = Object.assign(new UpdateClientDto(), req.body);
    const errors = await validate(updateClientDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const updatedClient = await updateClient(clientId, req.body);
    res.status(200).json(updatedClient);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al actualizar cliente: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al actualizar cliente` });
    }
  }
};

// Controlador para eliminar cliente
export const deleteClientController = async (req: Request, res: Response): Promise<void> => {
  try {
    const clientId = parseInt(req.params.id, 10);
    if (isNaN(clientId)) {
      res.status(400).json({ message: "ID de cliente no válido" });
      return;
    }

    const deletedClient = await deleteClient(clientId);
    res.status(200).json(deletedClient);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al eliminar cliente: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al eliminar cliente` });
    }
  }
};
