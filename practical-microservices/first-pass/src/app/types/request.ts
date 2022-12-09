import express from 'express';

export type RequestContext = { traceId: string }
export type Request = express.Request & { context: RequestContext };