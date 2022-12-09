import * as express from 'express';
import { Request } from '../types/request';

export default function lastResortErrorHandler (err: Error, req: Request, res: express.Response, next: express.NextFunction) {
    const traceId = req.context ? req.context.traceId : 'none'
    // tslint:disable-next-line:no-console
    console.error(traceId, err)

    res.status(500).send('error')
}