import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./config/database.js";

import project from './routes/project.routes.js';
import { blogRouter } from "./routes/blog.routes.js";

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/portfolio/project', project);
app.use('/portfolio/blog', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto ${PORT}`);
});;