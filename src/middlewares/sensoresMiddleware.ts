import { Request, Response, NextFunction } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (body.latitude === undefined || body.latitude === '') {
        return res.status(400).json({ message: 'The field "latitude" is required and cannot be empty' });
    }
    if (body.longitude === undefined || body.longitude === '') {
        return res.status(400).json({ message: 'The field "longitude" is required and cannot be empty' });
    }
    if (body.altitude === undefined || body.altitude === '') {
        return res.status(400).json({ message: 'The field "altitude" is required and cannot be empty' });
    }
    if (body.temperatura === undefined || body.temperatura === '') {
        return res.status(400).json({ message: 'The field "temperatura" is required and cannot be empty' });
    }
    if (body.pressao === undefined || body.pressao === '') {
        return res.status(400).json({ message: 'The field "pressao" is required and cannot be empty' });
    }
    if (body.umidade === undefined || body.umidade === '') {
        return res.status(400).json({ message: 'The field "umidade" is required and cannot be empty' });
    }
    if (body.velocidadeVento === undefined || body.velocidadeVento === '') {
        return res.status(400).json({ message: 'The field "velocidadeVento" is required and cannot be empty' });
    }
    if (body.direcaoVento === undefined || body.direcaoVento === '') {
        return res.status(400).json({ message: 'The field "direcaoVento" is required and cannot be empty' });
    }
    if (body.indiceUV === undefined || body.indiceUV === '') {
        return res.status(400).json({ message: 'The field "indiceUV" is required and cannot be empty' });
    }
    if (body.intensidadeLuminosa === undefined || body.intensidadeLuminosa === '') {
        return res.status(400).json({ message: 'The field "intensidadeLuminosa" is required and cannot be empty' });
    }
    if (body.chuva === undefined || body.chuva === '') {
        return res.status(400).json({ message: 'The field "chuva" is required and cannot be empty' });
    }
    if (body.volumeChuva === undefined || body.volumeChuva === '') {
        return res.status(400).json({ message: 'The field "volumeChuva" is required and cannot be empty' });
    }
    if (body.porcentagemBaterias === undefined || body.porcentagemBaterias === '') {
        return res.status(400).json({ message: 'The field "porcentagemBaterias" is required and cannot be empty' });
    }
    if (body.tensaoEletricaPlacaSolar === undefined || body.tensaoEletricaPlacaSolar === '') {
        return res.status(400).json({ message: 'The field "tensaoEletricaPlacaSolar" is required and cannot be empty' });
    }
    if (body.orientacaoPlacaSolar === undefined || body.orientacaoPlacaSolar === '') {
        return res.status(400).json({ message: 'The field "orientacaoPlacaSolar" is required and cannot be empty' });
    }

    next();
};

export { validateBody };
