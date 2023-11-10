
import { Sensores } from '../entity/Sensores';
import { AppDataSource } from "../data-source" // Importe a conexão correta do PostgreSQL

const sensorRepository = AppDataSource.getRepository(Sensores);

const getAll = async (): Promise<Sensores[]> => {
    const sensores = await sensorRepository.find();
    return sensores;
};

const getLast = async (number): Promise<Sensores[]> => {
    const sensores = await sensorRepository
        .createQueryBuilder("sensor")
        //.where("sensor.data = to_char(NOW(), 'DD/MM/YYYY')")
        .orderBy("sensor.id", "DESC")
        .take(number)
        .getMany();
        
    return sensores;
};

const getToday = async (): Promise<Sensores[]> => {
    const sensores = await sensorRepository
        .createQueryBuilder("sensor")
        .where("sensor.data = to_char(NOW(), 'DD/MM/YYYY')")
        .orderBy("sensor.id", "ASC")
        .getMany();
        
    return sensores;
};

const addSensores = async (dados): Promise<Sensores> => {
    console.log("Inserting a new data into the database...");

    const {
        latitude,
        longitude,
        altitude, 
        temperatura, 
        pressao, 
        umidade, 
        velocidadeVento, 
        direcaoVento, 
        indiceUV,
        intensidadeLuminosa,
        chuva,
        volumeChuva,
        porcentagemBaterias,
        tensaoEletricaPlacaSolar,
        orientacaoPlacaSolar
    } = dados;

    
    const sensores = new Sensores();

    sensores.data = new Date().toLocaleDateString("pt-br");
    sensores.hora = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    });
    sensores.latitude = latitude;
    sensores.longitude = longitude;
    sensores.altitude = altitude; 
    sensores.temperatura = temperatura;
    sensores.pressao = pressao;  
    sensores.umidade = umidade; 
    sensores.velocidadeVento = velocidadeVento; 
    sensores.direcaoVento = direcaoVento;
    sensores.indiceUV = indiceUV;
    sensores.intensidadeLuminosa = intensidadeLuminosa;
    sensores.chuva = chuva;
    sensores.volumeChuva = volumeChuva;
    sensores.porcentagemBaterias = porcentagemBaterias;
    sensores.tensaoEletricaPlacaSolar = tensaoEletricaPlacaSolar;
    sensores.orientacaoPlacaSolar = orientacaoPlacaSolar;

    const createdSensores = await sensorRepository.save(sensores);
    
    console.log("Saved a new sensores with id: " + sensores.id)
    return createdSensores;
};

export {
    getAll,
    getLast,
    getToday,
    addSensores,
};
