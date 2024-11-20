import { IsInt, IsNumber } from "class-validator";

/**
 * DTO para validar el ID de la orden de servicio de validación.
 */
export class ObtenerValidacionDto {
  /**
   * ID de la validación.
   * Debe ser un número entero.
   * @type {number}
   */
  @IsNumber({}, { message: "El ID de la validación debe ser un número" })
  @IsInt({ message: "El ID de la validación debe ser un número entero" })
  id_validacion!: number;
}

/**
 * DTO para desaprobar una validación.
 */
export interface DesaprobarValidacionDto {
  /**
   * ID de la validación a desaprobar.
   * Debe ser una cadena.
   * @type {string}
   */
  id: string; // Asegúrate de que esto sea string

  /**
   * ID del usuario que realiza la desaprobación.
   * @type {number}
   */
  id_usuario: number; // Esto puede seguir siendo number
}

/**
 * DTO para aprobar una validación.
 */
export interface AprobarValidacionDto {
  /**
   * ID de la cotización a aprobar.
   * @type {number}
   */
  id: number; // ID de la cotización

  /**
   * ID del usuario que aprueba la cotización.
   * @type {number}
   */
  id_usuario: number; // ID del usuario que aprueba
}

/**
 * Respuesta de la operación de aprobación de validación.
 */
export interface AprobarValidacionResponse {
  /**
   * Indica si la operación fue exitosa.
   * @type {boolean}
   */
  success: boolean;

  /**
   * Mensaje informativo sobre el resultado de la operación.
   * @type {string}
   */
  mensaje: string;
}

/**
 * DTO para exportar validaciones.
 */
export interface ExportarValidacionesDto {
  /**
   * Fecha de creación de la validación.
   * @type {string}
   */
  fecha_creado: string;

  /**
   * Usuario colaborador asociado a la validación.
   * Puede ser nulo.
   * @type {string | null}
   */
  colaborador_usuario: string | null;

  /**
   * ID de la orden de servicio de validación.
   * @type {string}
   */
  id_orden_servicio_validacion: string;

  /**
   * Razón social del cliente.
   * @type {string}
   */
  razon_social_cliente: string;

  /**
   * Total de bultos en la validación.
   * @type {number}
   */
  total_bultos: number;

  /**
   * Cantidad de destinos de la cotización.
   * @type {number}
   */
  cantidad_destinos_cotizacion: number;

  /**
   * Costo total del envío.
   * @type {number}
   */
  total_costo_envio: number;

  /**
   * Costo total adicional.
   * @type {number}
   */
  total_costo_adicional: number;

  /**
   * Recibo de la cotización.
   * @type {string}
   */
  recibo_cotizacion: string;

  /**
   * Precio total de la cotización.
   * @type {number}
   */
  precio_total_cotizacion: number;
}

/**
 * DTO para enviar una validación.
 */
export interface EnviarValidacionDto {
  /**
   * ID de la validación a enviar.
   * @type {number}
   */
  id: number;

  /**
   * ID del creador de la validación.
   * @type {number}
   */
  id_creador: number;
}
