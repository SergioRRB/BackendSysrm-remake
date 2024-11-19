import express from "express";
import cors from "cors";
//import cotizacionesRoutes from './routes/cotizacion.routes';
import validationRoutes from "./routes/Validation/validation.routes";
import programacionRoutes from "./routes/Programacion/programacion.routes";
import asignacionRecojoRoutes from "./routes/AsignacionRecojo/asignacionRecojo.routes";


const app = express();
app.use(cors());
app.use(express.json());

//app.use('/api/cotizaciones', cotizacionesRoutes);
app.use("/api/Validaciones", validationRoutes); // Prefijo para las rutas de validaciones
app.use("/api/Programacion", programacionRoutes); // Prefijo para las rutas de validaciones
app.use("/api/AsignacionRecojo", asignacionRecojoRoutes); // Prefijo para las rutas de validaciones

export default app;
