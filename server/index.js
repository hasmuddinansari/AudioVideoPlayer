const { Client } = require("pg");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const client = new Client({
  user: "mkbbqxmntqhnby",
  host: "ec2-34-193-101-0.compute-1.amazonaws.com",
  database: "d3jpe0nhcgaoe6",
  password: "7c5ff4b4d742d5559ada8656d6f06c9506c646452ddd29b27f76b9cc08306089",
  port: 5432,
  ssl: true,
});

client.connect();

client.query("SELECT * from userlist", (err, res) => {
  console.log(err, res);
  client.end();
});
