const express = require('express');
const router = express.Router();

import * as sensoresController from './controllers/sensoresController';
import * as sensoresMiddleware from './middlewares/sensoresMiddleware';

/**********************
 * Rotas              *
 **********************/

router.get('/sensores', sensoresController.getSensores);
router.post('/sensores', sensoresMiddleware.validateBody , sensoresController.createSensores);

export default router ;