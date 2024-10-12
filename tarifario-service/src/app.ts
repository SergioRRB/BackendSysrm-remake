// app
import express from "express";
import cors from "cors";
import listarClientesRoutes from "./routes/listarTarifarioRoutes/listarClientes.routes";
import selectionTarifarioRoutes from "./routes/selectionTarifarioRoutes/selectionTarifario.routes";
import listarAgentesRoutes from "./routes/listarTarifarioRoutes/listarAgentes.routes"; // Importar rutas de agentes

const app = express();
app.use(cors());
app.use(express.json());

// Rutas para listar clientes
app.use("/api/tarifario", listarClientesRoutes);

// http://localhost:3001/api/tarifario/selectionTarifarioCliente?id_cliente=1&id_area=2&ubigeo=3&tarifario=Courrier
app.use("/api/tarifario", selectionTarifarioRoutes);

app.use("/api/tarifario", listarAgentesRoutes); // Añadir las rutas de agentes

export default app;
