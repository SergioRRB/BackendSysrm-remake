import { Router } from "express";
import {
  listTarifaClienteAereo,
  //listTarifaCorporativoCarga,
  //listTarifaCorporativoCourrier,
  //listTarifaCorporativoInverso,
  //listTarifaCorporativoTransito,
  //listTarifaCorporativoValorizado,
} from "../../controllers/listarTarifario/listarCliente.controller";

const router = Router();

router.get("/getAereoCliente/:id", listTarifaClienteAereo);
//router.get("/getCargaCorporativo/:id", listTarifaCorporativoCarga);
//router.get("/getCourrierCorporativo/:id", listTarifaCorporativoCourrier);
//router.get("/getInversoCorporativo/:id", listTarifaCorporativoInverso);
//router.get("/getTransitoCorporativo/:id", listTarifaCorporativoTransito);
//router.get("/getValorizadoCorporativo/:id", listTarifaCorporativoValorizado);

export default router;
