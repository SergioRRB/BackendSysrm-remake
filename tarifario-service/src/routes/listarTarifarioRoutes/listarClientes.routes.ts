import { Router } from "express";
import listarClienteController from "../../controllers/listarTarifario/listarCliente.controller";

const router = Router();

router.get("/aereo/:id", listarClienteController.listarAereo);
//router.get("/carga/:id", listarClienteController.listarCarga);
//router.get("/courrier/:id", listarClienteController.listarCourrier);
//router.get("/inverso/:id", listarClienteController.listarInverso);
//router.get("/transito/:id", listarClienteController.listarTransito);
//router.get("/valorizado/:id", listarClienteController.listarValorizado);

export default router;
