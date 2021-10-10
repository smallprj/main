require("dotenv").config();
const { MongoClient } = require("mongodb");
const dbURI =
  "mongodb+srv://admin:fnLxnSvZYL08UWXj@small-project.etv2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// console.log(process.env.dbURI);

async function main() {
  const client = new MongoClient(dbURI);
  try {
    await client.connect();
    const posts = client.db("small-project").collection("posts");
    const result = await posts.find({}).toArray();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    client.close();
  }
}
main().catch(console.error);
