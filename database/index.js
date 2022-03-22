const { Pool } = require('pg');
const { dbPassword } = require('../config');

module.exports.pool = new Pool({
  host: '35.174.7.215',
  database: 'test',
  port: 5432,
  user: 'test_user',
  password: dbPassword,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
