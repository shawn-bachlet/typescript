import type { Knex } from 'knex'

export function up(knex: Knex) {
    return knex.schema.createTable('videos', (table) => {
        table.increments()
        table.string('owner_id')

        table.string('name')
        table.string('description')
        table.string('transcoding_status')
        table.integer('view_count').defaultTo(0)
})}

export function down(knex: Knex) {
  knex.schema.dropTable('videos')
}