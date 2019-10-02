const knex = require('knex');

const config = {
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
};
const knexClient = knex({
  client: 'pg',
  connection: config,
  pool: { min: 2, max: 100 },
  migrations: {
    tableName: 'knex_migrations'
  }
});
knexClient.raw('create database votefwd')
.then(() =>{
  knexClient.select()
  .table("pg_catalog.pg_tables")
  .then((result) => {
    console.log(result);
  });
});
