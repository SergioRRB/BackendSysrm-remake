import { Router } from "express";
import { validateDtoCliente } from "../../middlewares/validate"; // Middleware para validar DTOs
import { ExportarClienteDto } from "../../dtos/exportarTarifarioDto/exportarCliente.dto"; // DTO para exportación de clientes
import {
  exportarTarifaClienteAereo, // Controlador para exportar tarifas de cliente aéreo
  exportarTarifaClienteCarga, // Controlador para exportar tarifas de cliente de carga
  exportarTarifaClienteCourrier, // Controlador para exportar tarifas de cliente courrier
  exportarTarifaClienteValorizado, // Controlador para exportar tarifas de cliente valorizado
} from "../../controllers/exportarTarifario/exportarCliente.controller";

// Crea una instancia del enrutador de Express
const router = Router();

/**
 * Ruta para exportar tarifas de un cliente aéreo.
 * Se espera que se pasen los parámetros de ruta `id_cliente` y `id_area`.
 * Se valida la solicitud utilizando el middleware `validateDtoCliente` con el `ExportarClienteDto`.
 *
 * @route GET /exportarClienteAereo/:id_cliente/:id_area
 * @param {string} id_cliente - Identificador único del cliente aéreo a exportar.
 * @param {string} id_area - Identificador del área relacionada con el cliente.
 * @returns {Response} - Respuesta de la API con la tarifa exportada.
 */
router.get("/exportarClienteAereo/:id_cliente/:id_area", validateDtoCliente(ExportarClienteDto), exportarTarifaClienteAereo);

/**
 * Ruta para exportar tarifas de un cliente de carga.
 * Se espera que se pasen los parámetros de ruta `id_cliente` y `id_area`.
 * Se valida la solicitud utilizando el middleware `validateDtoCliente` con el `ExportarClienteDto`.
 *
 * @route GET /exportarClienteCarga/:id_cliente/:id_area
 * @param {string} id_cliente - Identificador único del cliente de carga a exportar.
 * @param {string} id_area - Identificador del área relacionada con el cliente.
 * @returns {Response} - Respuesta de la API con la tarifa exportada.
 */
router.get("/exportarClienteCarga/:id_cliente/:id_area", validateDtoCliente(ExportarClienteDto), exportarTarifaClienteCarga);

/**
 * Ruta para exportar tarifas de un cliente courrier.
 * Se espera que se pasen los parámetros de ruta `id_cliente` y `id_area`.
 * Se valida la solicitud utilizando el middleware `validateDtoCliente` con el `ExportarClienteDto`.
 *
 * @route GET /exportarClienteCourrier/:id_cliente/:id_area
 * @param {string} id_cliente - Identificador único del cliente courrier a exportar.
 * @param {string} id_area - Identificador del área relacionada con el cliente.
 * @returns {Response} - Respuesta de la API con la tarifa exportada.
 */
router.get("/exportarClienteCourrier/:id_cliente/:id_area", validateDtoCliente(ExportarClienteDto), exportarTarifaClienteCourrier);

/**
 * Ruta para exportar tarifas de un cliente valorizado.
 * Se espera que se pasen los parámetros de ruta `id_cliente` y `id_area`.
 * Se valida la solicitud utilizando el middleware `validateDtoCliente` con el `ExportarClienteDto`.
 *
 * @route GET /exportarClienteValorizado/:id_cliente/:id_area
 * @param {string} id_cliente - Identificador único del cliente valorizado a exportar.
 * @param {string} id_area - Identificador del área relacionada con el cliente.
 * @returns {Response} - Respuesta de la API con la tarifa exportada.
 */
router.get("/exportarClienteValorizado/:id_cliente/:id_area", validateDtoCliente(ExportarClienteDto), exportarTarifaClienteValorizado);

// Exporta las rutas definidas para su uso en otras partes de la aplicación
export default router;
