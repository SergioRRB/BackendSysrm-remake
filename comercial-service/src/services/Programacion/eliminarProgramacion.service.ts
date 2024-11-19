import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function eliminarProgramacion(id: number) {
  // Validar si ya ha sido asignado
  const count = await prisma.asignacion_recojos.count({
    where: { id: id },
  });

  if (count > 0) {
    return {
      success: false,
      message: "Error: ¡No se puede eliminar, ya fue asignado!",
    };
  }

  // Eliminar la programación si no está asignada
  try {
    await prisma.programaciones.delete({
      where: { id: id },
    });
    return { success: true, message: "¡Se anuló correctamente!" };
  } catch (error) {
    return {
      success: false,
      message: "Error: ¡Hubo un error y no se pudo eliminar!",
    };
  }
}
