import { Request, Response } from 'express';
import { getAll, addSensores, getLast, getToday } from '../models/sensoresModel';

const getSensores = async (req: Request, res: Response) => {
    try {
        const sensores = await getAll();
        return res.status(200).json(sensores);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getLastSensores = async (req: Request, res: Response) => {
    try {
        const { number } = req.params;
        const sensores = await getLast(number);
        return res.status(200).json(sensores);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getTodaySensores = async (req: Request, res: Response) => {
    try {
        const sensores = await getToday();
        return res.status(200).json(sensores);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createSensores = async (req: Request, res: Response) => {
    try {
        const newSensores = await addSensores(req.body);
        return res.status(201).json(newSensores);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error'+error });
    }
};

export { getSensores, getLastSensores, getTodaySensores, createSensores };
