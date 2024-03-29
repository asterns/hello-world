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
.then((result) =>{
  console.log(result);
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
