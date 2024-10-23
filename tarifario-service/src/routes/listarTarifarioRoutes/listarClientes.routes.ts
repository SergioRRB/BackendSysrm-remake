import { Router } from "express"; // Importa el enrutador de Express
import {
  listTarifaClienteAereo,
  listTarifaClienteCarga,
  listTarifaClienteCourrier,
  listTarifaClienteValorizado,
} from "../../controllers/listarTarifario/listarCliente.controller"; // Importa las funciones del controlador para listar tarifas de clientes
import { validateDtoCliente } from "../../middlewares/validate"; // Importa el middleware para validar DTOs
import { ListarClienteDto } from "../../dtos/listarTarifarioDto/listarCliente.dto"; // Importa el DTO de cliente

// Crea una instancia del enrutador
const router = Router();

/**
 * Ruta para obtener las tarifas de un cliente aéreo.
 * 
 * @route GET /getAereoCliente/:id_cliente/:id_area
 * @param {string} id_cliente - ID del cliente aéreo cuyas tarifas se desean obtener.
 * @param {string} id_area - ID del área relacionada con el cliente.
 * @param {validateDtoCliente} middleware - Middleware que valida el DTO del cliente.
 * @param {listTarifaClienteAereo} controller - Controlador que maneja la lógica para listar tarifas de clientes aéreos.
 */
router.get("/getAereoCliente/:id_cliente/:id_area", validateDtoCliente(ListarClienteDto), listTarifaClienteAereo);

/**
 * Ruta para obtener las tarifas de un cliente de carga.
 * 
 * @route GET /getCargaCliente/:id_cliente/:id_area
 * @param {string} id_cliente - ID del cliente de carga cuyas tarifas se desean obtener.
 * @param {string} id_area - ID del área relacionada con el cliente.
 * @param {validateDtoCliente} middleware - Middleware que valida el DTO del cliente.
 * @param {listTarifaClienteCarga} controller - Controlador que maneja la lógica para listar tarifas de clientes de carga.
 */
router.get("/getCargaCliente/:id_cliente/:id_area", validateDtoCliente(ListarClienteDto), listTarifaClienteCarga);

/**
 * Ruta para obtener las tarifas de un cliente courrier.
 * 
 * @route GET /getCourrierCliente/:id_cliente/:id_area
 * @param {string} id_cliente - ID del cliente courrier cuyas tarifas se desean obtener.
 * @param {string} id_area - ID del área relacionada con el cliente.
 * @param {validateDtoCliente} middleware - Middleware que valida el DTO del cliente.
 * @param {listTarifaClienteCourrier} controller - Controlador que maneja la lógica para listar tarifas de clientes courriers.
 */
router.get("/getCourrierCliente/:id_cliente/:id_area", validateDtoCliente(ListarClienteDto), listTarifaClienteCourrier);

/**
 * Ruta para obtener las tarifas de un cliente valorizado.
 * 
 * @route GET /getValorizadoCliente/:id_cliente/:id_area
 * @param {string} id_cliente - ID del cliente valorizado cuyas tarifas se desean obtener.
 * @param {string} id_area - ID del área relacionada con el cliente.
 * @param {validateDtoCliente} middleware - Middleware que valida el DTO del cliente.
 * @param {listTarifaClienteValorizado} controller - Controlador que maneja la lógica para listar tarifas de clientes valorizados.
 */
router.get("/getValorizadoCliente/:id_cliente/:id_area", validateDtoCliente(ListarClienteDto), listTarifaClienteValorizado);

// Exporta el enrutador para su uso en otros módulos
export default router;
