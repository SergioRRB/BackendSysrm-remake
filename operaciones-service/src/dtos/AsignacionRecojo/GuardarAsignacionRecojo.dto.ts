/**
 * Data Transfer Object para manejar datos de asignación de recojo.
 */
export interface AsignacionRecojoDTO {
  /**
   * Opción seleccionada para la asignación ("externos" o "internos").
   */
  opcionSeleccionada: string;

  /**
   * DNI del auxiliar encargado del recojo (aplica para externos).
   */
  dni_auxiliar_recojo?: string;

  /**
   * DNI del conductor encargado del recojo (aplica para externos).
   */
  dni_conductor_recojo?: string;

  /**
   * ID de la orden de servicio relacionada con el recojo.
   */
  id_orden_servicio_recojo?: string;

  /**
   * ID del proveedor asignado al recojo (aplica para externos).
   */
  id_proveedor_recojo?: number;

  /**
   * Nombre del auxiliar encargado del recojo (aplica para externos).
   */
  nombre_auxiliar_recojo?: string;

  /**
   * Nombre del conductor encargado del recojo (aplica para externos).
   */
  nombre_conductor_recojo?: string;

  /**
   * ID del conductor asignado al recojo (aplica para internos).
   */
  id_conductor_recojo?: number;

  /**
   * ID del auxiliar asignado al recojo (aplica para internos).
   */
  id_auxiliar_recojo?: number;
}
