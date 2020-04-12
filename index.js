const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5432",
  database: "mydb",
});

client
  .connect()
  .then(() => console.log("Connected successfuly"))
  .then(() => client.query("SELECT name FROM staff"))
  .then((results) => console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());
