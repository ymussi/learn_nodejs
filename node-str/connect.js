const { Pool, Client } = require('pg')
const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

const pool = new Pool({
  user: config.psql.user,
  host: config.psql.host,
  database: config.psql.database,
  password: config.psql.password,
  port: config.psql.port
})

pool.query('SELECT * from public.log_salesforce', (err, res) => {
  console.log(err, res)
  pool.end()
})
