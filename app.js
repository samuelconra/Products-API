import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routerAPI from './src/routes/routes.js';
import errorHandler from './src/middlewares/error.middleware.js';
import setupSwagger from './src/config/swagger.js';

const app = express();

app.use(express.json());
app.use(cors());

routerAPI(app);
setupSwagger(app);
app.use(errorHandler);

const cluster = "mongodb+srv://samuelconra:Password.@scr-cluster.rph1o8c.mongodb.net/?retryWrites=true&w=majority&appName=scr-cluster"
mongoose.connect(cluster)
  .then(() => console.log("Successfull Connection"))
  .catch((err) => console.log("Connection Error", err))

app.listen(3000, console.log('Server on http://localhost:3000'));
