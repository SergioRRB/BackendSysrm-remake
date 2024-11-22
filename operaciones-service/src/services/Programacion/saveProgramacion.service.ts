import { PrismaClient } from "@prisma/client";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";

// Crear una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase `GuardarProgramacionService`
 * Servicio responsable de guardar o crear programaciones en la base de datos.
 */
export class GuardarProgramacionService {
  /**
   * Método `saveProgramacion`
   * Crea una nueva programación en la base de datos utilizando los datos proporcionados.
   *
   * @param {CreateProgramacionDto} data - Objeto con los datos necesarios para crear la programación.
   * @returns {Promise<Object>} Resultado de la operación con el estado y el mensaje.
   */
  async saveProgramacion(data: CreateProgramacionDto) {
    // Obtener la fecha actual en formato ISO
    const fechaActual = new Date().toISOString();

    // Verificar si ya existe una programación con el mismo ID de orden de servicio
    const existeProgramacion = await prisma.programaciones.findUnique({
      where: { id_orden_servicio: data.id_orden_servicio },
    });

    // Verificar si el cliente asociado a la programación existe
    const clienteExistente = await prisma.clientes.findUnique({
      where: {
        id: data.id_cliente_programacion,
      },
    });

    if (!clienteExistente) {
      return { success: false, message: "Cliente no encontrado" };
    }

    // Crear una nueva programación en la base de datos
    const newProgramacion = await prisma.programaciones.create({
      data: {
        id_orden_servicio: data.id_orden_servicio,
        id_cliente_programacion: data.id_cliente_programacion,
        area_programacion: data.area_programacion,
        ubigeo_programacion: data.ubigeo_programacion,
        direccion_programacion: data.direccion_programacion,
        referencias_programacion: data.referencias_programacion,
        contacto_programacion: data.contacto_programacion,
        telefono_programacion: data.telefono_programacion,
        correo_programacion: data.correo_programacion,
        descripcion_mercancia_programacion:
          data.descripcion_mercancia_programacion,
        cantidad_bultos_programacion: data.cantidad_bultos_programacion,
        peso_mercancia_programacion: data.peso_mercancia_programacion,
        peso_volumen_programacion: data.peso_volumen_programacion,
        metros_cubicos_programacion: data.metros_cubicos_programacion,
        fecha_programacion: new Date(data.fecha_programacion),
        hora_programacion: new Date(
          `${data.fecha_programacion}T${data.hora_programacion}:00`,
        ),
        id_creador_programacion: data.id_creador_programacion,
        fecha_creado: fechaActual,
      },
    });

    // Devolver el resultado de la operación
    return {
      success: true,
      message: "Programación creada correctamente",
      datos: newProgramacion,
    };
  }
}
