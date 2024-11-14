import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function eliminarProgramacion(id: number) {
  const count = await prisma.asignacion_recojos.count({
    where: { id: id },
  });

  if (count > 0) {
    return {
      success: false,
      message: "Error: ¡No se puede eliminar, ya fue asignado!",
    };
  }

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
