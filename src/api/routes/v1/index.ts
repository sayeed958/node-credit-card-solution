/*
Routes file
*/
import * as express from 'express';
import cardRoutes from './card.routes';

const router = express.Router();

router.use('/card', cardRoutes);

export default router;
