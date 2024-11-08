import { PrismaClient } from "@prisma/client";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";
const prisma = new PrismaClient();

export class GuardarProgramacionService {
  async saveProgramacion(data: CreateProgramacionDto) {
    const fechaActual = new Date().toISOString();

    // Verificar si ya existe una programación para la orden de servicio
    const existeProgramacion = await prisma.programaciones.findUnique({
      where: { id_orden_servicio: data.id_orden_servicio },
    });

    // Verificar que el cliente exista
    const clienteExistente = await prisma.clientes.findUnique({
      where: {
        id: data.id_cliente_programacion,
      },
    });

    if (!clienteExistente) {
      return { success: false, message: "Cliente no encontrado" };
    }

    // Si no existe, creamos una nueva programación
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

    return {
      success: true,
      message: "Programación creada correctamente",
      datos: newProgramacion,
    };
  }
}
