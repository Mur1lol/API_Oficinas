import "reflect-metadata"
import { DataSource } from "typeorm"
import { Sensores } from "./entity/Sensores"
import { config } from 'dotenv';

config(); // Carregar variáveis de ambiente a partir do arquivo .env

const AppDataSource = new DataSource({
    type: "mysql",
    
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

    synchronize: true,
    logging: false,
    entities: [Sensores],
    migrations: [],
    subscribers: [],
})

export { AppDataSource };