import { Router } from "express";
import { listarAgenteAereo } from "../../controllers/listarTarifario/listarAgente.controller";
import { validateDto } from "../../middlewares/validate";
import { ListarAgenteDto } from "../../dtos/listarTarifarioDto/listarAgente.dto"; // Asegúrate de que la ruta del DTO es correcta

const router = Router();

// Ruta para listar tarifas de un agente aéreo específico con validación de DTO

router.get(
  "/getAereoAgente/:id_agente",
  validateDto(ListarAgenteDto), // Aplica la validación
  listarAgenteAereo.getAereoAgente,
);

// retorna lista vacia ya que no hay data en la tabla.
//router.get("/getAereoAgente/:id_agente", listarAgenteAereo.getAereoAgente);

export default router;
