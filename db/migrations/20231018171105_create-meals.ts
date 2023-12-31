import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.text('description').notNullable()
    table.date('date').notNullable()
    table.time('time').notNullable()
    table.boolean('isInDiet').notNullable()
    table.uuid('user_id').notNullable()
    table.foreign('user_id').references('Users.user_id').deferrable('deferred')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
