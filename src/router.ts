import express from 'express';
const router = express.Router();

import * as sensoresController from './controllers/sensoresController';
//import * as sensoresMiddleware from './middlewares';

/**********************
 * Rotas              *
 **********************/

router.get('/sensores', sensoresController.getSensores);
router.post('/sensores', sensoresController.createSensores);

export default router ;