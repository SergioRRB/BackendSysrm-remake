// app
import express from "express";
import cors from "cors";
import listarClientesRoutes from "./routes/listarTarifarioRoutes/listarClientes.routes";
import selectionTarifarioRoutes from "./routes/selectionTarifarioRoutes/selectionTarifario.routes";
import listarAgentesRoutes from "./routes/listarTarifarioRoutes/listarAgentes.routes"; // Importar rutas de agentes
import listarTransportistasRoutes from "./routes/listarTarifarioRoutes/listarTransportistas.routes"; // Importar rutas de agentes
import exportarAgentesRoutes from "./routes/exportarTarifarioRoutes/exportarAgentes.routes";
import exportarClientesRoutes from "./routes/exportarTarifarioRoutes/exportarClientes.routes";
import exportarTransportistasRoutes from "./routes/exportarTarifarioRoutes/exportarTransportistas.routes";
import exportarUbigeoRoutes from "./routes/exportarUbigeoRoutes/exportarUbigeo.routes";
import importarAgenteRoutes from "./routes/importarTarifarioRoutes/importarAgente.routes";
import importarClienteRoutes from "./routes/importarTarifarioRoutes/importarCliente.routes";
import importarTransportistaRoutes from "./routes/importarTarifarioRoutes/importarTransportista.routes";


const app = express();
app.use(cors());
app.use(express.json());

// List Routes
app.use("/api/tarifario", listarClientesRoutes);
app.use("/api/tarifario", listarAgentesRoutes);
app.use("/api/tarifario", listarTransportistasRoutes);

// Export Routes
app.use("/api/tarifario", exportarAgentesRoutes);
app.use("/api/tarifario", exportarClientesRoutes);
app.use("/api/tarifario", exportarTransportistasRoutes);

// Selection Routes
// http://localhost:3001/api/tarifario/selectionTarifarioCliente?id_cliente=34&id_area=15&ubigeo=90101&tarifario=Courrier
app.use("/api/tarifario", selectionTarifarioRoutes);

// Ubigeo Export...
app.use("/api/tarifario", exportarUbigeoRoutes);

// Import Routes    
app.use('/api/tarifario/import', importarAgenteRoutes);
app.use('/api/tarifario/import', importarClienteRoutes);
app.use('/api/tarifario/import', importarTransportistaRoutes);

export default app;
