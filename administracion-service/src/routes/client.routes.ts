import { Router } from "express";
import {
  addClientController,
  listClientsController,
  updateClientController,
  deleteClientController,
} from "../controllers/client.controller";
import { validateDto } from "../middlewares/validate";
import { CreateClientDto, UpdateClientDto } from "../dtos/client.dto";

const router = Router();

// Ruta para crear un nuevo cliente
router.post("/create", validateDto(CreateClientDto), addClientController);

// Ruta para listar todos los clientes
router.get("/list", listClientsController);

// Ruta para actualizar un cliente existente
router.put("/update/:id", validateDto(UpdateClientDto), updateClientController);

// Ruta para eliminar un cliente por su ID
router.delete("/delete/:id", deleteClientController);

export default router;
