import { Request, Response } from 'express';
import { createProvider, getAllProviders, updateProvider, deleteProvider } from '../services/provider.service';
import { CreateProviderDto, UpdateProviderDto } from '../dtos/provider.dto';
import { validate } from 'class-validator';

export const addProviderController = async (req: Request, res: Response): Promise<void> => {
  try {
    const createProviderDto = Object.assign(new CreateProviderDto(), req.body);
    const errors = await validate(createProviderDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const newProvider = await createProvider(req.body);
    res.status(201).json(newProvider);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al crear proveedor: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al crear proveedor` });
    }
  }
};

export const listProvidersController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const providers = await getAllProviders();
    res.status(200).json(providers);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al obtener proveedores: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al obtener proveedores` });
    }
  }
};

export const updateProviderController = async (req: Request, res: Response): Promise<void> => {
  try {
    const providerId = parseInt(req.params.id, 10);
    if (isNaN(providerId)) {
      res.status(400).json({ message: "ID de proveedor no válido" });
      return;
    }

    const updateProviderDto = Object.assign(new UpdateProviderDto(), req.body);
    const errors = await validate(updateProviderDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const updatedProvider = await updateProvider(providerId, req.body);
    res.status(200).json(updatedProvider);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al actualizar proveedor: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al actualizar proveedor` });
    }
  }
};

export const deleteProviderController = async (req: Request, res: Response): Promise<void> => {
  try {
    const providerId = parseInt(req.params.id, 10);
    if (isNaN(providerId)) {
      res.status(400).json({ message: "ID de proveedor no válido" });
      return;
    }

    const deletedProvider = await deleteProvider(providerId);
    res.status(200).json(deletedProvider);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al eliminar proveedor: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al eliminar proveedor` });
    }
  }
};
