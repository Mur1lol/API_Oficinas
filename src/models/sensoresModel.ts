
import { Sensores } from '../entity/Sensores';

import { AppDataSource } from "../data-source" // Importe a conexão correta do PostgreSQL

const getAll = async (): Promise<Sensores[]> => {
    
    const sensorRepository = AppDataSource.getRepository(Sensores);
    const sensores = await sensorRepository.find();
    return sensores;

};

const addSensores = async (name: string, description: string): Promise<Sensores> => {
    const sensorRepository = AppDataSource.getRepository(Sensores);

    console.log("Inserting a new data into the database...")
    const sensores = new Sensores()
    sensores.name = "Timber"
    sensores.description = "Saw"
    sensores.views = 25
    sensores.isPublished = true

    // await AppDataSource.manager.save(sensores)
    // console.log("Saved a new sensores with id: " + sensores.id)

    const createdSensores = await sensorRepository.save(sensores);
    
    console.log("Saved a new sensores with id: " + sensores.id)
    return createdSensores;
};

export {
    getAll,
    addSensores,
};
