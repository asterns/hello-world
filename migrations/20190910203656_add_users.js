'use strict';

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments();
      table
        .string('auth0_id', 1024)
        .notNullable();
      table
        .string('first_name', 256)
      table
        .string('last_name', 256)
      table.timestamps(false, true);
      table.unique(['auth0_id']);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users');
};
