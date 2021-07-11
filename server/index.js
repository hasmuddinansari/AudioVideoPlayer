const { Client } = require("pg");

require("dotenv").config();

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: true,
});

client.connect();

client.query("SELECT * from userlist", (err, res) => {
  console.log(err, res);
  client.end();
});
