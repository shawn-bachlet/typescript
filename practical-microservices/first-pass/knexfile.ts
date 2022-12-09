import type { Knex } from "knex";
import { env } from "./src/env";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: env.databaseUrl,
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

module.exports = config;
