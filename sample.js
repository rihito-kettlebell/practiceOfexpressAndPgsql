const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "postgres",
  port: 5432,
});
client.connect();
client.query("SELECT name FROM staff", (err, res) => {
  //console.log(err, res)
  console.log(res.rows[0]);
  console.log(res.rows[1]);
  console.log(res.rows[2]);
  // client.end();
});
