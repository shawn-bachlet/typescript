import express from 'express';
import {v4 as uuid} from 'uuid';
import { Request } from './request';

export default function primeRequestContext(req: Request, res: express.Response, next: express.NextFunction) {
    req.context = {
        traceId: uuid()
    }
    next()
}