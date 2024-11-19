import express from "express";
import cors from "cors";
import programacionRoutes from "./routes/Programacion/programacion.routes";
import asignacionRecojoRoutes from "./routes/AsignacionRecojo/asignacionRecojo.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/Programacion", programacionRoutes); // Prefijo para las rutas de validaciones
app.use("/api/AsignacionRecojo", asignacionRecojoRoutes); // Prefijo para las rutas de validaciones

export default app;
