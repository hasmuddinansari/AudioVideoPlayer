const { Client } = require("pg");

require("dotenv").config();

const client = new Client({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query("SELECT * from users", (err, res) => {
  console.table(res.rows);
  client.end();
});
