export interface AgenteAereoDto {
  kg_tarifario_agente_aereo: number;
  kg_adicional_tarifario_agente_aereo: number;
  tmin_tarifario_agente_aereo: number;
  tmax_tarifario_agente_aereo: number;
  ubigeo_tarifario_agente_aereo: number;
  fecha_vigencia: Date;
}

export interface AgenteCourrierDto {
  kg_tarifario_agente_courrier: number;
  kg_adicional_tarifario_agente_courrier: number;
  tmin_tarifario_agente_courrier: number;
  tmax_tarifario_agente_courrier: number;
  ubigeo_tarifario_agente_courrier: number;
  fecha_vigencia: Date;
}