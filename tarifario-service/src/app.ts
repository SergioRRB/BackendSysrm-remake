// app.ts
import express from "express";
import cors from "cors";
import listarClientesRoutes from "./routes/listarTarifarioRoutes/listarClientes.routes";
import selectionTarifarioRoutes from "./routes/selectionTarifarioRoutes/selectionTarifario.routes";
import listarAgentesRoutes from "./routes/listarTarifarioRoutes/listarAgentes.routes"; 
import listarTransportistasRoutes from "./routes/listarTarifarioRoutes/listarTransportistas.routes"; 
import exportarAgentesRoutes from "./routes/exportarTarifarioRoutes/exportarAgentes.routes";
import exportarClientesRoutes from "./routes/exportarTarifarioRoutes/exportarClientes.routes";
import exportarTransportistasRoutes from "./routes/exportarTarifarioRoutes/exportarTransportistas.routes";
import exportarUbigeoRoutes from "./routes/exportarUbigeoRoutes/exportarUbigeo.routes";
import importarAgenteRoutes from "./routes/importarTarifarioRoutes/importarAgente.routes";
import importarClienteRoutes from "./routes/importarTarifarioRoutes/importarCliente.routes";
import importarTransportistaRoutes from "./routes/importarTarifarioRoutes/importarTransportista.routes";

// Inicializa la aplicación Express
const app = express();
app.use(cors()); // Habilita CORS para permitir solicitudes de diferentes dominios
app.use(express.json()); // Permite que la aplicación maneje JSON en las solicitudes

// List Routes
// Define rutas para listar clientes, agentes y transportistas
app.use("/api/tarifario", listarClientesRoutes); // Rutas para listar clientes
app.use("/api/tarifario", listarAgentesRoutes); // Rutas para listar agentes
app.use("/api/tarifario", listarTransportistasRoutes); // Rutas para listar transportistas

// Export Routes
// Define rutas para exportar agentes, clientes y transportistas
app.use("/api/tarifario", exportarAgentesRoutes); // Rutas para exportar agentes
app.use("/api/tarifario", exportarClientesRoutes); // Rutas para exportar clientes
app.use("/api/tarifario", exportarTransportistasRoutes); // Rutas para exportar transportistas

// Selection Routes
// Ruta para obtener tarifas seleccionadas basadas en cliente, área y ubigeo
// Ejemplo de uso: http://localhost:3001/api/tarifario/selectionTarifarioCliente?id_cliente=34&id_area=15&ubigeo=90101&tarifario=Courrier
app.use("/api/tarifario", selectionTarifarioRoutes); // Rutas para selección de tarifario

// Ubigeo Export...
// Rutas para exportar información de ubigeo
app.use("/api/tarifario", exportarUbigeoRoutes); // Rutas para exportar ubigeo

// Import Routes    
// Define rutas para importar agentes, clientes y transportistas
app.use('/api/tarifario/import', importarAgenteRoutes); // Rutas para importar agentes
app.use('/api/tarifario/import', importarClienteRoutes); // Rutas para importar clientes
app.use('/api/tarifario/import', importarTransportistaRoutes); // Rutas para importar transportistas

// Exporta la aplicación para su uso en otros módulos
export default app;
