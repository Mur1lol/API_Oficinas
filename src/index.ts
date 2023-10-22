import { AppDataSource } from "./data-source"

import { config } from 'dotenv';
const express = require('express');
import router from './router';

config(); // Carregar variáveis de ambiente a partir do arquivo .env

const PORT = process.env.PORT || 3333;
const app = express();

AppDataSource.initialize().then(async () => {
    app.use(express.json());

    app.use(router);

    app.listen(PORT, () => console.log('Server running on '+PORT));

}).catch(error => console.log(error))
