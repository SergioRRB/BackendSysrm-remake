import { Request, Response } from 'express';
import ValidacionService from '../../services/Validacion/Validacion.service';
import { ValidacionDto } from '../../dtos/Validation.dto';

export class ValidationController {
  async getValidaciones(req: Request, res: Response): Promise<Response> {
    try {
      const validaciones = await ValidacionService.getValidaciones();

      // Convierte los datos a DTO
      const validacionesDto: ValidacionDto[] = validaciones.map((validacion) => ({
        id: validacion.id,
        fecha_creado: validacion.fecha_creado,
        colaborador_usuario: validacion.colaborador_usuario || null, // Fixed: Assign null instead of undefined
        id_orden_servicio_validacion: validacion.id_orden_servicio_validacion,
        razon_social_cliente: validacion.razon_social_cliente || '', // Se puede ajustar según la lógica de negocio
        total_bultos: validacion.total_bultos,
        total_costo_envio: validacion.total_costo_envio,
        total_costo_adicional: validacion.total_costo_adicional,
        recibo_cotizacion: validacion.recibo_cotizacion || null,
        precio_total_cotizacion: validacion.precio_total_cotizacion,
        estado_validacion: validacion.estado_validacion,
      }));


      return res.status(200).json(validacionesDto);
    } catch (error) {
      console.error('Error al obtener validaciones:', error);
      return res.status(500).json({ message: 'Error al obtener validaciones' });
    }
  }
}

