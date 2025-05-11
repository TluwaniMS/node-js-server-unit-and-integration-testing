import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
export const app = express();
import { unknownRequests, errorResponse } from './middleware/errorhandler.js';
import { router as studentsroute } from './routes/students-route.js';
import { router as schoolsRoute } from './routes/schools-route.js';
dotenv.config({ path: './.env' });

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/api/students', studentsroute);
app.use('/api/schools', schoolsRoute);
app.use(unknownRequests);
app.use(errorResponse);

