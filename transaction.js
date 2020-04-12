// dbの特定
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5432",
  database: "mydb",
});

async function transaction() {
  try {
    await client.connect();
    // BEGIN
    await client.query("BEGIN");
    await client.query("select * from staff");

    await client.query("insert into staff values ($1, $2, $3)", [
      2,
      "hanako",
      18,
    ]);
    console.log("insert a new row");
    // COMMIT
    await client.query("COMMIT");
  } catch (ex) {
    console.log('Failed to execute something' + ex + "this is error")
    console.log(`Failed to execute something ${ex}`)
    console.log(ex)
  } finally {
    await client.end();
    console.log("Client disconnected successfully");
  }
}

transaction();
