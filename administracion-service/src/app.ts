import express from 'express';
import cors from 'cors';
import clientRoutes from './routes/client.routes';
import areaRoutes from './routes/area.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/client', clientRoutes);
app.use('/api/area', areaRoutes);

export default app;
