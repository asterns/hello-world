const knex = require('knex');

const config = {
  user: 'postgres',
  password: 'secretpassword',
  database: 'postgres',
  //port: '5432'
  host: 'postgres'
};
const knexClient = knex({
  client: 'pg',
  connection: config,
  pool: { min: 2, max: 100 },
  migrations: {
    tableName: 'knex_migrations'
  }
});
knexClient.select()
  .table("pg_catalog.pg_tables")
  .then((result) => {
    console.log(result);
  });