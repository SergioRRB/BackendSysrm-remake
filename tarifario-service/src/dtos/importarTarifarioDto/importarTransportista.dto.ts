// dtos for transportistas

export interface TransportistaCargaDto {
  ubigeo_tarifario_transportista_carga: number;
  kg_maximo_tarifario_transportista_carga: number;
  kg_base_adicional_tarifario_transportista_carga: number;
  paquete_tarifario_transportista_carga: number;
  tmin_tarifario_transportista_carga: number;
  tmax_tarifario_transportista_carga: number;
}

export interface TransportistaCourrierDto {
  ubigeo_tarifario_transportista_courrier: number;
  kg_tarifario_transportista_courrier: number;
  kg_adicional_tarifario_transportista_courrier: number;
  tmin_tarifario_transportista_courrier: number;
  tmax_tarifario_transportista_courrier: number;
}
