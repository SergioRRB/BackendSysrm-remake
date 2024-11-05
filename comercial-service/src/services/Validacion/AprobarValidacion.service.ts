import { PrismaClient } from "@prisma/client";
import {
  AprobarValidacionDto,
  AprobarValidacionResponse,
} from "../../dtos/Validation.dto";

/**
 * Servicio para manejar la aprobación de validaciones.
 */
export class AprobarValidacionesService {
  private prisma: PrismaClient;

  /**
   * Inicializa una nueva instancia del servicio de aprobación de validaciones.
   */
  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * Aprueba una validación dada la información proporcionada.
   *
   * Este método realiza las siguientes acciones:
   * 1. Busca la validación correspondiente en la base de datos.
   * 2. Si la validación no existe o ya ha sido cambiada, devuelve un mensaje de error.
   * 3. Busca la cotización asociada a la validación.
   * 4. Si no se encuentra la cotización, devuelve un mensaje de error.
   * 5. Busca el cliente asociado a la cotización.
   * 6. Si no se encuentra el cliente, devuelve un mensaje de error.
   * 7. Calcula la suma del crédito del cliente y verifica si excede el límite de crédito asignado.
   * 8. Si la suma excede el límite, devuelve un mensaje de error.
   * 9. Actualiza el crédito del cliente y el estado de la validación a "aprobada".
   *
   * @param {AprobarValidacionDto} data - Datos necesarios para aprobar la validación, incluyendo el ID de la validación y el ID del usuario que aprueba.
   * @returns {Promise<AprobarValidacionResponse>} - Retorna una promesa que resuelve en un objeto que indica el resultado de la operación.
   */
  public async aprobarValidacion(
    data: AprobarValidacionDto,
  ): Promise<AprobarValidacionResponse> {
    const { id, id_usuario } = data;

    // Busca la validación correspondiente
    const validacion = await this.prisma.validaciones.findFirst({
      where: {
        id_orden_servicio_validacion: String(id),
        estado_validacion: "0",
        id_accion_validacion: null,
      },
    });

    if (!validacion) {
      return { success: false, mensaje: "!Esta cotización ya se cambió" };
    }

    // Busca la cotización
    const cotizacion = await this.prisma.cotizaciones.findUnique({
      where: { id: Number(id) },
    });

    if (!cotizacion) {
      return { success: false, mensaje: "No se encontró la cotización" };
    }

    const cliente = await this.prisma.clientes.findUnique({
      where: { id: cotizacion.id_cliente_cotizacion ?? undefined },
    });

    if (!cliente) {
      return { success: false, mensaje: "No se encontró el cliente" };
    }

    // Calcula la suma de crédito
    const sumaCredito =
      (cliente.alerta_credito_cliente?.toNumber() ?? 0) +
      cotizacion.precio_total_cotizacion.toNumber();

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
