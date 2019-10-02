'use strict';

const connection = {
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
};

const config = {
  client: 'pg',
  connection: connection,
  migrations: {
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './seeds'
  }
};

module.exports = {
  development: config,
  production: config
};
