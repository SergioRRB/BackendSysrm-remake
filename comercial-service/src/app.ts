import express from 'express';
import cors from 'cors';
import cotizacionesRoutes from './routes/cotizacion.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cotizaciones', cotizacionesRoutes);

export default app;
