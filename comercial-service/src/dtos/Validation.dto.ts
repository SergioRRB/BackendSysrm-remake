import { IsInt, IsNumber } from "class-validator";

/**
 * DTO para validar el ID de la orden de servicio de validación.
 */
export class ObtenerValidacionDto {
  @IsNumber({}, { message: "El ID de la validación debe ser un número" })
  @IsInt({ message: "El ID de la validación debe ser un número entero" })
  id_validacion!: number;
}

export interface DesaprobarValidacionDto {
  id: string; // Asegúrate de que esto sea string
  id_usuario: number; // Esto puede seguir siendo number
}

export interface AprobarValidacionDto {
  id: number; // ID de la cotización
  id_usuario: number; // ID del usuario que aprueba
}

export interface AprobarValidacionResponse {
  success: boolean;
  mensaje: string;
}

export interface ExportarValidacionesDto {
  fecha_creado: string;
  colaborador_usuario: string | null;
  id_orden_servicio_validacion: string;
  razon_social_cliente: string;
  total_bultos: number;
  cantidad_destinos_cotizacion: number;
  total_costo_envio: number;
  total_costo_adicional: number;
  recibo_cotizacion: string;
  precio_total_cotizacion: number;
}

export interface EnviarValidacionDto {
  id: number;
  id_creador: number;
}
