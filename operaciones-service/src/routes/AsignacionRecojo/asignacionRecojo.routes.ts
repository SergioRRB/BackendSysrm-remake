import { Router } from "express";
import { GuardarAsignacionRecojoController } from "../../controllers/AsignacionRecojo/GuardarAsignacionRecojo.controller";
import { ObtenerAsignacionRecojoController } from "../../controllers/AsignacionRecojo/ObtenerAsignacionRecojo.controller";

const router = Router();
const guardarAsignacionRecojoController =
  new GuardarAsignacionRecojoController();

const obtenerAsignacionRecojoController =
  new ObtenerAsignacionRecojoController();

router.post(
  "/SaveAsignacionRecojo",
  guardarAsignacionRecojoController.guardarAsignacion,
);

router.get(
  "/GetAsignacionRecojo",
  obtenerAsignacionRecojoController.obtenerAsignaciones.bind(
    obtenerAsignacionRecojoController,
  ),
);

export default router;
