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
  // 接続を確認
  .then(() => console.log("Connected successfuly"))
  // テーブルから取得
  .then(() => client.query("select * from staff"))
  // 結果を返す
  .then((results) => console.table(results.rows))
  // エラーの場合
  .catch((e) => console.log(e))
  // 終了
  .finally(() => client.end());
