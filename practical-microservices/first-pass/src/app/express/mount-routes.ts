import express from 'express';
import { Config } from '../types/config';

export default function mountRoutes (app: express.Application, config: Config) {
  app.use('/', config.homeApp.router)
  app.use('/record-viewing', config.recordViewingsApp.router)

  app.get('/health', (req, res) => {
    res.send('OK')
  })
}