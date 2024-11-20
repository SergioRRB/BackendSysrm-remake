import express from "express";
import cors from "cors";
import cotizacionesRoutes from "./routes/cotizacion.routes";
import validationRoutes from "./routes/Validation/validation.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cotizaciones", cotizacionesRoutes);
app.use("/api/Validaciones", validationRoutes);

export default app;
