import { Request, Response, NextFunction } from 'express';

const validateBody = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    if (body.client === undefined) {
        return res.status(400).json({ message: 'The field "client" is required' });
    }

    if (body.client === '') {
        return res.status(400).json({ message: 'Client cannot be empty' });
    }

    next();
};

export { validateBody };
