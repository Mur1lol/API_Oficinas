import express = require('express');
const router = express.Router();

import * as sensoresController from './controllers/sensoresController';
import * as sensoresMiddleware from './middlewares/sensoresMiddleware';

/**********************
 * Rotas              *
 **********************/

// Retorna todos os dados
router.get('/sensores', sensoresController.getSensores);

// Retorna todos os dados da data atual
router.get('/sensores/today', sensoresController.getTodaySensores);

// Retorna ultimos dados de acordo com o number passado
router.get('/sensores/:number', sensoresController.getLastSensores);

// Insere os dados no banco
router.post('/sensores', sensoresMiddleware.validateBody , sensoresController.createSensores);

export default router ;