// app
import express from "express";
import cors from "cors";
import listarClientesRoutes from './routes/listarTarifarioRoutes/listarClientes.routes';

const app = express();
app.use(cors());
app.use(express.json());

// Rutas para listar clientes
app.use('/api/tarifario', listarClientesRoutes);

export default app;
