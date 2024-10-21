export interface ClienteAereoDto {
  kg_tarifario_cliente_aereo: number;
  kg_adicional_tarifario_cliente_aereo: number;
  tmin_tarifario_cliente_aereo: number;
  tmax_tarifario_cliente_aereo: number;
  ubigeo_tarifario_cliente_aereo: number;
  fecha_vigencia: Date;
}

export interface ClienteCargaDto {
  kg_maximo_tarifario_cliente_carga: number;
  kg_base_adicional_tarifario_cliente_carga: number;
  paquete_tarifario_cliente_carga: number;
  tmin_tarifario_cliente_carga: number;
  tmax_tarifario_cliente_carga: number;
  ubigeo_tarifario_cliente_carga: number;
  fecha_vigencia: Date;
}

export interface ClienteCourrierDto {
  kg_tarifario_cliente_courrier: number;
  kg_adicional_tarifario_cliente_courrier: number;
  tmin_tarifario_cliente_courrier: number;
  tmax_tarifario_cliente_courrier: number;
  ubigeo_tarifario_cliente_courrier: number;
  fecha_vigencia: Date;
}

export interface ClienteValorizadoDto {
  ubigeo_tarifario_cliente_valorizado: number;
  producto_tarifario_cliente_valorizado: string;
  costo_producto_tarifario_cliente_valorizado: number;
  tmin_tarifario_cliente_valorizado: number;
  tmax_tarifario_cliente_valorizado: number;
  fecha_vigencia: Date;
}
