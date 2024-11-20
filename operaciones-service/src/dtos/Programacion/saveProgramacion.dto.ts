export interface CreateProgramacionDto {
  id_orden_servicio: string;
  id_cliente_programacion: number;
  area_programacion: string;
  ubigeo_programacion: string;
  direccion_programacion: string;
  referencias_programacion: string;
  contacto_programacion: string;
  telefono_programacion: string;
  correo_programacion: string;
  descripcion_mercancia_programacion: string;
  cantidad_bultos_programacion: number;
  peso_mercancia_programacion: number;
  peso_volumen_programacion: number;
  metros_cubicos_programacion: number;
  fecha_programacion: string;
  hora_programacion: string;
  id_creador_programacion: number;
}
