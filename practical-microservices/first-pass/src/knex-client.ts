import Bluebird from 'bluebird'
import knex from 'knex'

export function createKnexClient (connectionString: string, migrationsTableName?: string) {
  const client = knex(connectionString)

  const migrationOptions = {
    tableName: migrationsTableName || 'knex_migrations'
  }

  // Wrap in Bluebird.resolve to guarantee a Bluebird Promise down the chain
  return Bluebird.resolve(client.migrate.latest(migrationOptions))
    .then(() => client)
}