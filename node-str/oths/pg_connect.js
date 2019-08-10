const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'capmaster',
  host: 'captalys-psql.cmrbivuuu7sv.sa-east-1.rds.amazonaws.com',
  database: 'espec',
  password: 'dumpq1w2e3r4',
  port: 35432
})
pool.query('SELECT * from public.log_salesforce', (err, res) => {
  console.log(err, res)
  pool.end()
})
