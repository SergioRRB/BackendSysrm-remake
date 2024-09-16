import { Router } from 'express';
import { addClientController, listClientsController, updateClientController, deleteClientController } from '../controllers/client.controller';
import { validateDto } from '../middlewares/validate';
import { CreateClientDto } from '../dtos/client.dto';