import { Request, Response } from 'express';
import { createVehicle, getAllVehicles, updateVehicle, deleteVehicle } from '../services/vehicle.service';
import { CreateVehicleDto, UpdateVehicleDto } from '../dtos/vehicle.dto';
import { validate } from 'class-validator';

export const addVehicleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const createVehicleDto = Object.assign(new CreateVehicleDto(), req.body);
    const errors = await validate(createVehicleDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const newVehicle = await createVehicle(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al crear vehículo: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al crear vehículo` });
    }
  }
};

export const listVehiclesController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const vehicles = await getAllVehicles();
    res.status(200).json(vehicles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al obtener vehículos: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al obtener vehículos` });
    }
  }
};

export const updateVehicleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const vehicleId = parseInt(req.params.id, 10);
    if (isNaN(vehicleId)) {
      res.status(400).json({ message: "ID de vehículo no válido" });
      return;
    }

    const updateVehicleDto = Object.assign(new UpdateVehicleDto(), req.body);
    const errors = await validate(updateVehicleDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const updatedVehicle = await updateVehicle(vehicleId, req.body);
    res.status(200).json(updatedVehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al actualizar vehículo: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al actualizar vehículo` });
    }
  }
};

export const deleteVehicleController = async (req: Request, res: Response): Promise<void> => {
  try {
    const vehicleId = parseInt(req.params.id, 10);
    if (isNaN(vehicleId)) {
      res.status(400).json({ message: "ID de vehículo no válido" });
      return;
    }

    const deletedVehicle = await deleteVehicle(vehicleId);
    res.status(200).json(deletedVehicle);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al eliminar vehículo: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al eliminar vehículo` });
    }
  }
};
