import { Env } from "./env"
import { createKnexClient } from "./knex-client"
import { createHome } from "./app/home"
import { Config } from "./app/types/config"
import { createRecordViewings } from "./app/record-viewing"

export default function createConfig (env: Env): Config {
  const db = createKnexClient(env.databaseUrl)
  const homeApp = createHome(db)
  const recordViewingsApp = createRecordViewings(db)

  return {
    env: env.env,
    db,
    homeApp,
    recordViewingsApp
  }
}