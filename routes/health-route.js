import express from 'express';
import { errorHandler } from '../middleware/errorhandler.js';
export const router = express.Router();

router.get(
  '/',
  errorHandler(async (req, res) => {
    res.status(200).send({ message: 'App is running.' });
  })
);

