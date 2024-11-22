/**
 * Interfaz `CreateProgramacionDto`
 * Define la estructura de los datos requeridos para crear una programación.
 */
export interface CreateProgramacionDto {
  /**
   * Identificador único de la orden de servicio asociada a la programación.
   */
  id_orden_servicio: string;

  /**
   * ID del cliente relacionado con la programación.
   */
  id_cliente_programacion: number;

  /**
   * Área o sector específico donde se realiza la programación.
   */
  area_programacion: string;

  /**
   * Código de ubicación geográfica (ubigeo) que identifica la localización.
   */
  ubigeo_programacion: string;

  /**
   * Dirección física asociada a la programación.
   */
  direccion_programacion: string;

  /**
   * Indicaciones adicionales o referencias para ubicar el lugar de la programación.
   */
  referencias_programacion: string;

  /**
   * Nombre del contacto principal para la programación.
   */
  contacto_programacion: string;

  /**
   * Número telefónico del contacto.
   */
  telefono_programacion: string;

  /**
   * Dirección de correo electrónico del contacto.
   */
  correo_programacion: string;

  /**
   * Descripción detallada de la mercancía incluida en la programación.
   */
  descripcion_mercancia_programacion: string;

  /**
   * Número total de bultos o paquetes incluidos.
   */
  cantidad_bultos_programacion: number;

  /**
   * Peso total de la mercancía en kilogramos.
   */
  peso_mercancia_programacion: number;

  /**
   * Peso volumétrico calculado de la mercancía.
   */
  peso_volumen_programacion: number;

  /**
   * Volumen total de la mercancía en metros cúbicos.
   */
  metros_cubicos_programacion: number;

  /**
   * Fecha programada para la realización del servicio (formato: `YYYY-MM-DD`).
   */
  fecha_programacion: string;

  /**
   * Hora programada para el servicio (formato: `HH:mm`).
   */
  hora_programacion: string;

  /**
   * ID del usuario o sistema que creó la programación.
   */
  id_creador_programacion: number;
}
