/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas aéreas de un agente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface AgenteAereoDto {
  /**
   * Tarifa por kilogramo para el agente aéreo.
   * 
   * @type {number}
   */
  kg_tarifario_agente_aereo: number;

  /**
   * Tarifa adicional por kilogramo para el agente aéreo.
   * 
   * @type {number}
   */
  kg_adicional_tarifario_agente_aereo: number;

  /**
   * Tarifa mínima para el agente aéreo.
   * 
   * @type {number}
   */
  tmin_tarifario_agente_aereo: number;

  /**
   * Tarifa máxima para el agente aéreo.
   * 
   * @type {number}
   */
  tmax_tarifario_agente_aereo: number;

  /**
   * Ubigeo asociado a la tarifa del agente aéreo.
   * 
   * @type {number}
   */
  ubigeo_tarifario_agente_aereo: number;

  /**
   * Fecha de vigencia de las tarifas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}

/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas de courriers de un agente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface AgenteCourrierDto {
  /**
   * Tarifa por kilogramo para el agente courrier.
   * 
   * @type {number}
   */
  kg_tarifario_agente_courrier: number;

  /**
   * Tarifa adicional por kilogramo para el agente courrier.
   * 
   * @type {number}
   */
  kg_adicional_tarifario_agente_courrier: number;

  /**
   * Tarifa mínima para el agente courrier.
   * 
   * @type {number}
   */
  tmin_tarifario_agente_courrier: number;

  /**
   * Tarifa máxima para el agente courrier.
   * 
   * @type {number}
   */
  tmax_tarifario_agente_courrier: number;

  /**
   * Ubigeo asociado a la tarifa del agente courrier.
   * 
   * @type {number}
   */
  ubigeo_tarifario_agente_courrier: number;

  /**
   * Fecha de vigencia de las tarifas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}
