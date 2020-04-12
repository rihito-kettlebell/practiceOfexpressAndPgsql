// dbの特定
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5432",
  database: "mydb",
});

async function asyncTable() {
  try {
    await client.connect();
    console.log("Connected successfully in async");
    const results = await client.query("select * from staff");
    console.table(results.rows);
    client.end();
    console.log("Client disconnected successfully");
  } catch (ex) {
    console.log(`Something wrong happend ${ex}`);
  } finally {
    await client.end();
    console.log("Client disconnected successfully");
  }
}
asyncTable();
