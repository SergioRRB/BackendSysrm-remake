import { Request, Response } from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../services/user.service';
import { validate } from 'class-validator';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';


export const addUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const createUserDto = Object.assign(new CreateUserDto(), req.body);

    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const newUser = await createUser(req.body);

    console.log("Usuario Creado:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'El DNI ya está registrado') {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: `Error al crear usuario: ${error.message}` });
      }
    } else {
      res.status(500).json({ message: `Error desconocido al crear usuario` });
    }
  }
};

export const listUsersController = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();

    console.log("users listados");
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al obtener usuarios: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al obtener usuarios` });
    }
  }
};

// Controlador para actualizar usuario
export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      res.status(400).json({ message: "ID de usuario no válido" });
      return;
    }

    const updateUserDto = Object.assign(new UpdateUserDto(), req.body);
    const errors = await validate(updateUserDto);
    if (errors.length > 0) {
      res.status(400).json({ errors: errors.map(err => err.constraints) });
      return;
    }

    const updatedUser = await updateUser(userId, req.body);
    console.log("Usuario Actualizado:", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al actualizar usuario: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al actualizar usuario` });
    }
  }
};

// Controlador para eliminar usuario
export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      res.status(400).json({ message: "ID de usuario no válido" });
      return;
    }

    const deletedUser = await deleteUser(userId);

    console.log("Usuario Eliminado:", deletedUser);
    res.status(200).json(deletedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error al eliminar usuario: ${error.message}` });
    } else {
      res.status(500).json({ message: `Error desconocido al eliminar usuario` });
    }
  }
};