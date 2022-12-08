import express from 'express';
import { join } from 'path';
import { Env } from '../../env';

import attachLocals from './attach-locals';
import lastResortErrorHandler from './last-resort-error-handler';
import primeRequestContext from './prime-request-context';

export default function mountMiddleware(app: express.Application, env: Env) {
    app.use(lastResortErrorHandler)
    app.use(primeRequestContext)
    app.use(attachLocals)
    app.use(express.static(join(__dirname, '..', 'public'), { maxAge: 86400000 }));
}
