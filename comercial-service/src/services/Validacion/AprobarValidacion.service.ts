import { PrismaClient } from "@prisma/client";
import {
  AprobarValidacionDto,
  AprobarValidacionResponse,
} from "../../dtos/Validation.dto";

export class AprobarValidacionesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async aprobarValidacion(
    data: AprobarValidacionDto,
  ): Promise<AprobarValidacionResponse> {
    const { id, id_usuario } = data;

    // Busca la validación correspondiente
    const validacion = await this.prisma.validaciones.findFirst({
      where: {
        id_orden_servicio_validacion: String(id), // Asegúrate de que coincida con tu esquema
        estado_validacion: "0",
        id_accion_validacion: null,
      },
    });

    if (!validacion) {
      return { success: false, mensaje: "!Esta cotización ya se cambió" };
    }
    // Busca la cotización
    const cotizacion = await this.prisma.cotizaciones.findUnique({
      where: { id: Number(id) }, // Cambiado a Number
    });

    if (!cotizacion) {
      return { success: false, mensaje: "No se encontró la cotización" };
    }

    const cliente = await this.prisma.clientes.findUnique({
      where: { id: cotizacion.id_cliente_cotizacion ?? undefined }, // Manejamos undefined
    });

    if (!cliente) {
      return { success: false, mensaje: "No se encontró el cliente" };
    }

    // Calcula la suma de crédito
    const sumaCredito =
      (cliente.alerta_credito_cliente?.toNumber() ?? 0) +
      cotizacion.precio_total_cotizacion.toNumber(); // Convierte ambos a number

    // Verifica si la suma de crédito supera el límite
    if (sumaCredito > cliente.limite_credito_cliente.toNumber()) {
      return {
        success: false,
        mensaje: "¡La cotización sobrepasa el límite de crédito asignado!",
      };
    }

    // Actualiza el crédito del cliente
    await this.prisma.clientes.update({
      where: { id: cliente.id },
      data: { alerta_credito_cliente: sumaCredito },
    });

    // Actualiza el estado de la validación
    await this.prisma.validaciones.update({
      where: { id: validacion.id },
      data: { estado_validacion: "1", id_accion_validacion: id_usuario },
    });

    return { success: true, mensaje: "!Cotización aprobada correctamente!" };
  }
}
