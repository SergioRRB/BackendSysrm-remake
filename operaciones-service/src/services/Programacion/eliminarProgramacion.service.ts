import { PrismaClient } from "@prisma/client";

// Crear una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Función `eliminarProgramacion`
 * Permite eliminar una programación de la base de datos si no está asignada.
 *
 * @param {number} id - Identificador único de la programación a eliminar.
 * @returns {Promise<{ success: boolean; message: string }>} 
 * Un objeto con un indicador de éxito y un mensaje informativo.
 *
 * Lógica de funcionamiento:
 * 1. Verifica si la programación está asignada en la tabla `asignacion_recojos`.
 *    - Si tiene asignaciones, devuelve un mensaje indicando que no se puede eliminar.
 * 2. Si no tiene asignaciones:
 *    - Intenta eliminar la programación utilizando Prisma.
 *    - Devuelve un mensaje de éxito si la eliminación fue correcta.
 *    - Captura y maneja errores, devolviendo un mensaje de fallo en caso de problema.
 */
export async function eliminarProgramacion(id: number) {
  // Contar cuántas asignaciones están relacionadas con la programación
  const count = await prisma.asignacion_recojos.count({
    where: { id: id },
  });

  // Si la programación está asignada, no se permite eliminarla
  if (count > 0) {
    return {
      success: false,
      message: "Error: ¡No se puede eliminar, ya fue asignado!",
    };
  }

  try {
    // Intentar eliminar la programación de la base de datos
    await prisma.programaciones.delete({
      where: { id: id },
    });
    return { success: true, message: "¡Se anuló correctamente!" };
  } catch (error) {
    // Manejo de errores en caso de que la eliminación falle
    return {
      success: false,
      message: "Error: ¡Hubo un error y no se pudo eliminar!",
    };
  }
}