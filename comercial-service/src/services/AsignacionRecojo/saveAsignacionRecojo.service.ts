import { PrismaClient } from "@prisma/client";
import { AsignacionRecojoDTO } from "../../dtos/AsignacionRecojo/GuardarAsignacionRecojo.dto";

const prisma = new PrismaClient();

export class GuardarAsignacionRecojoService {
  async guardarAsignacion(data: AsignacionRecojoDTO) {
    //const fechaCreado = new Date().toISOString().split("T")[0];
    const fechaCreado = new Date().toISOString();

    if (data.opcionSeleccionada === "externos") {
      if (
        !data.dni_auxiliar_recojo ||
        !data.dni_conductor_recojo ||
        !data.id_orden_servicio_recojo ||
        !data.id_proveedor_recojo ||
        !data.nombre_auxiliar_recojo ||
        !data.nombre_conductor_recojo
      ) {
        throw new Error("Debe llenar todos los campos requeridos.");
      }

      const asignacionExistente = await prisma.asignacion_recojos.findFirst({
        where: {
          id_orden_servicio_recojo: data.id_orden_servicio_recojo.toString(),
        },
      });

      if (!asignacionExistente) {
        await prisma.asignacion_recojos.create({
          data: {
            fecha_creado: fechaCreado,
            id_orden_servicio_recojo: data.id_orden_servicio_recojo.toString(),
            id_proveedor_recojo: data.id_proveedor_recojo,
            dni_conductor_recojo: data.dni_conductor_recojo,
            nombre_conductor_recojo: data.nombre_conductor_recojo,
            dni_auxiliar_recojo: data.dni_auxiliar_recojo,
            nombre_auxiliar_recojo: data.nombre_auxiliar_recojo,
          },
        });
        return { success: true, message: "¡Asignado Correctamente!" };
      } else {
        await prisma.asignacion_recojos.update({
          //where: { id_orden_servicio_recojo: data.id_orden_servicio_recojo },
          where: { id: asignacionExistente.id },
          data: {
            id_proveedor_recojo: data.id_proveedor_recojo,
            dni_conductor_recojo: data.dni_conductor_recojo,
            nombre_conductor_recojo: data.nombre_conductor_recojo,
            dni_auxiliar_recojo: data.dni_auxiliar_recojo,
            nombre_auxiliar_recojo: data.nombre_auxiliar_recojo,
            id_conductor_recojo: null,
            id_auxiliar_recojo: null,
          },
        });
        return { success: true, message: "¡Actualizado Correctamente!" };
      }
    } else {
      if (
        !data.id_conductor_recojo ||
        !data.id_auxiliar_recojo ||
        !data.id_orden_servicio_recojo
      ) {
        throw new Error("Debe llenar todos los campos requeridos.");
      }

      const asignacionExistente = await prisma.asignacion_recojos.findFirst({
        where: {
          id_orden_servicio_recojo: data.id_orden_servicio_recojo.toString(),
        },
      });

      if (!asignacionExistente) {
        await prisma.asignacion_recojos.create({
          data: {
            fecha_creado: fechaCreado,
            id_orden_servicio_recojo: data.id_orden_servicio_recojo.toString(),
            id_conductor_recojo: data.id_conductor_recojo,
            id_auxiliar_recojo: data.id_auxiliar_recojo,
          },
        });
        return { success: true, message: "¡Asignado Correctamente!" };
      } else {
        await prisma.asignacion_recojos.update({
          //where: { id_orden_servicio_recojo: data.id_orden_servicio_recojo },
          where: { id: asignacionExistente.id },
          data: {
            id_proveedor_recojo: null,
            dni_conductor_recojo: null,
            nombre_conductor_recojo: null,
            dni_auxiliar_recojo: null,
            nombre_auxiliar_recojo: null,
            id_conductor_recojo: data.id_conductor_recojo,
            id_auxiliar_recojo: data.id_auxiliar_recojo,
          },
        });
        return { success: true, message: "¡Actualizado Correctamente!" };
      }
    }
  }
}
