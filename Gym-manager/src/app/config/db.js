const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "benilson6",
  host: "localhost",
  port: 5432,
  database: "gymanager",
});
