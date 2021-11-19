import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import teamRoutes from './routes/teamRoutes.js';

const app = express();

dotenv.config();

connectDb();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/api/team', teamRoutes);

app.get('/', (req, res) => {
  res.send('Running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  console.log(`The server is running on port ${PORT}`);
});
