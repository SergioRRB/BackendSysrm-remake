export interface ValidacionDto {
    id: number;
    fecha_creado: Date;
    colaborador_usuario: string | null;
    id_orden_servicio_validacion: string;
    razon_social_cliente: string;
    total_bultos: number;
    total_costo_envio: number;
    total_costo_adicional: number;
    recibo_cotizacion: string | null;
    precio_total_cotizacion: number;
    estado_validacion: string;
  }
  