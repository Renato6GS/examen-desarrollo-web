const { Pool } = require("pg");

let conn;

if (!conn) {
  conn = new Pool({
    user: "postgres",
    host: "localhost",
    database: "examen",
    password: "PASSWORD",
    port: 5433,
  });
}

module.exports = conn;
