import express from 'express';
import type { Config } from '../../config';

export default function mountRoutes (app: express.Application, config: Config) {
  app.get('/health', (req, res) => {
    res.send('OK')
  })
}