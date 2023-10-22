import { Request, Response } from 'express';
import { getAll, addSensores } from '../models/sensoresModel';

const getSensores = async (req: Request, res: Response) => {
    try {
        const sensores = await getAll();
        return res.status(200).json(sensores);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createSensores = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const newSensores = await addSensores(name, description);
        return res.status(201).json(newSensores);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getSensores, createSensores };
