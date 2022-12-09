import createExpressApp from "./app/express";
import createConfig from "./config";
import { env } from "./env";
import camelCaseKeys from "camelcase-keys";

export const config = createConfig(env);
export const app = createExpressApp(config, env);

function signalAppStart() {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${env.port}`)
}

app.listen(env.port, signalAppStart)