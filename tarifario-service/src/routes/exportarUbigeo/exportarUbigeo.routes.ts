import { Router } from "express";
import { handleExportarUbigeo } from "../../controllers/exportarUbigeo/exportarUbigeo.controller";

const router = Router();

router.get("/exportarUbigeo", handleExportarUbigeo);

export default router;
