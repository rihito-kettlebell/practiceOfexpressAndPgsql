// dbの特定
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
  // 追加するのはこの列のコード
  .then(() => client.query("insert into staff values ($1, $2, $3)", [1, "taro", 21]))
  .then(() => client.query("select * from staff"))
  .then((results) => console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());
