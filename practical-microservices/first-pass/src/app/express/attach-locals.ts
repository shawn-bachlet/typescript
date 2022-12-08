import express from 'express';
import { Request } from './request';

export default function attachLocals (req: Request, res: express.Response, next: express.NextFunction) {
    res.locals.context = req.context
    next()
}