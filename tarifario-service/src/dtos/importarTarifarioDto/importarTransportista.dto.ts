/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas de carga de un transportista.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface TransportistaCargaDto {
  /**
   * Ubigeo asociado a la tarifa del transportista de carga.
   * 
   * @type {number}
   */
  ubigeo_tarifario_transportista_carga: number;

  /**
   * Peso máximo tarifario para el transportista de carga.
   * 
   * @type {number}
   */
  kg_maximo_tarifario_transportista_carga: number;

  /**
   * Tarifa base adicional por kilogramo para el transportista de carga.
   * 
   * @type {number}
   */
  kg_base_adicional_tarifario_transportista_carga: number;

  /**
   * Número de paquetes tarifarios para el transportista de carga.
   * 
   * @type {number}
   */
  paquete_tarifario_transportista_carga: number;

  /**
   * Tarifa mínima para el transportista de carga.
   * 
   * @type {number}
   */
  tmin_tarifario_transportista_carga: number;

  /**
   * Tarifa máxima para el transportista de carga.
   * 
   * @type {number}
   */
  tmax_tarifario_transportista_carga: number;
}

/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas de courriers de un transportista.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface TransportistaCourrierDto {
  /**
   * Ubigeo asociado a la tarifa del transportista courrier.
   * 
   * @type {number}
   */
  ubigeo_tarifario_transportista_courrier: number;

  /**
   * Tarifa por kilogramo para el transportista courrier.
   * 
   * @type {number}
   */
  kg_tarifario_transportista_courrier: number;

  /**
   * Tarifa adicional por kilogramo para el transportista courrier.
   * 
   * @type {number}
   */
  kg_adicional_tarifario_transportista_courrier: number;

  /**
   * Tarifa mínima para el transportista courrier.
   * 
   * @type {number}
   */
  tmin_tarifario_transportista_courrier: number;

  /**
   * Tarifa máxima para el transportista courrier.
   * 
   * @type {number}
   */
  tmax_tarifario_transportista_courrier: number;
}
