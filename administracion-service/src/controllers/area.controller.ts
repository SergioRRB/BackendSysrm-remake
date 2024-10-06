import { Request, Response } from 'express';
import { createArea, getAllAreas, updateArea, deleteArea } from '../services/area.service';
import { CreateAreaDto, UpdateAreaDto } from '../dtos/area.dto';
import { validate } from 'class-validator';

export const addAreaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const createAreaDto = Object.assign(new CreateAreaDto(), req.body);
    const errors = await validate(createAreaDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const newArea = await createArea(req.body);
    res.status(201).json(newArea);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al crear área: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al crear área` });
    }
  }
};

export const listAreasController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const areas = await getAllAreas();
    res.status(200).json(areas);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al obtener áreas: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al obtener áreas` });
    }
  }
};

export const updateAreaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const areaId = parseInt(req.params.id, 10);
    if (isNaN(areaId)) {
      res.status(400).json({ message: "ID de área no válido" });
      return;
    }

    const updateAreaDto = Object.assign(new UpdateAreaDto(), req.body);
    const errors = await validate(updateAreaDto);

    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const updatedArea = await updateArea(areaId, req.body);
    res.status(200).json(updatedArea);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al actualizar área: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al actualizar área` });
    }
  }
};

export const deleteAreaController = async (req: Request, res: Response): Promise<void> => {
  try {
    const areaId = parseInt(req.params.id, 10);
    if (isNaN(areaId)) {
      res.status(400).json({ message: "ID de área no válido" });
      return;
    }

    const deletedArea = await deleteArea(areaId);
    res.status(200).json(deletedArea);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al eliminar área: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al eliminar área` });
    }
  }
};
