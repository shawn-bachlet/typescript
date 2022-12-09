import express from "express";
import { join } from "path";
import { Env } from "../../env";
import { Config } from "../types/config";

import mountMiddleware from './mount-middleware';
import mountRoutes from './mount-routes';

export default function createExpressApp(config: Config, env: Env) {
  const app = express();

  app.set('views', join(__dirname, '..'));
  app.set('view engine', 'pug');

  mountMiddleware(app, env);
  mountRoutes(app, config);

  return app;
}