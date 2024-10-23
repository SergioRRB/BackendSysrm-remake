/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas aéreas de un cliente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface ClienteAereoDto {
  /**
   * Tarifa por kilogramo para el cliente aéreo.
   * 
   * @type {number}
   */
  kg_tarifario_cliente_aereo: number;

  /**
   * Tarifa adicional por kilogramo para el cliente aéreo.
   * 
   * @type {number}
   */
  kg_adicional_tarifario_cliente_aereo: number;

  /**
   * Tarifa mínima para el cliente aéreo.
   * 
   * @type {number}
   */
  tmin_tarifario_cliente_aereo: number;

  /**
   * Tarifa máxima para el cliente aéreo.
   * 
   * @type {number}
   */
  tmax_tarifario_cliente_aereo: number;

  /**
   * Ubigeo asociado a la tarifa del cliente aéreo.
   * 
   * @type {number}
   */
  ubigeo_tarifario_cliente_aereo: number;

  /**
   * Fecha de vigencia de las tarifas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}

/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas de carga de un cliente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface ClienteCargaDto {
  /**
   * Peso máximo tarifario para el cliente de carga.
   * 
   * @type {number}
   */
  kg_maximo_tarifario_cliente_carga: number;

  /**
   * Tarifa base adicional por kilogramo para el cliente de carga.
   * 
   * @type {number}
   */
  kg_base_adicional_tarifario_cliente_carga: number;

  /**
   * Número de paquetes tarifarios para el cliente de carga.
   * 
   * @type {number}
   */
  paquete_tarifario_cliente_carga: number;

  /**
   * Tarifa mínima para el cliente de carga.
   * 
   * @type {number}
   */
  tmin_tarifario_cliente_carga: number;

  /**
   * Tarifa máxima para el cliente de carga.
   * 
   * @type {number}
   */
  tmax_tarifario_cliente_carga: number;

  /**
   * Ubigeo asociado a la tarifa del cliente de carga.
   * 
   * @type {number}
   */
  ubigeo_tarifario_cliente_carga: number;

  /**
   * Fecha de vigencia de las tarifas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}

/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas de courriers de un cliente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface ClienteCourrierDto {
  /**
   * Tarifa por kilogramo para el cliente courrier.
   * 
   * @type {number}
   */
  kg_tarifario_cliente_courrier: number;

  /**
   * Tarifa adicional por kilogramo para el cliente courrier.
   * 
   * @type {number}
   */
  kg_adicional_tarifario_cliente_courrier: number;

  /**
   * Tarifa mínima para el cliente courrier.
   * 
   * @type {number}
   */
  tmin_tarifario_cliente_courrier: number;

  /**
   * Tarifa máxima para el cliente courrier.
   * 
   * @type {number}
   */
  tmax_tarifario_cliente_courrier: number;

  /**
   * Ubigeo asociado a la tarifa del cliente courrier.
   * 
   * @type {number}
   */
  ubigeo_tarifario_cliente_courrier: number;

  /**
   * Fecha de vigencia de las tarifas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}

/**
 * Interfaz que define el objeto de transferencia de datos (DTO) para tarifas valorizadas de un cliente.
 * Contiene propiedades que representan las tarifas y otros detalles relevantes.
 */
export interface ClienteValorizadoDto {
  /**
   * Ubigeo asociado a la tarifa valorizada del cliente.
   * 
   * @type {number}
   */
  ubigeo_tarifario_cliente_valorizado: number;

  /**
   * Producto tarifario valorizado del cliente.
   * 
   * @type {string}
   */
  producto_tarifario_cliente_valorizado: string;

  /**
   * Costo del producto tarifario valorizado para el cliente.
   * 
   * @type {number}
   */
  costo_producto_tarifario_cliente_valorizado: number;

  /**
   * Tarifa mínima para el cliente valorizado.
   * 
   * @type {number}
   */
  tmin_tarifario_cliente_valorizado: number;

  /**
   * Tarifa máxima para el cliente valorizado.
   * 
   * @type {number}
   */
  tmax_tarifario_cliente_valorizado: number;

  /**
   * Fecha de vigencia de las tarifas valorizadas.
   * 
   * @type {Date}
   */
  fecha_vigencia: Date;
}
