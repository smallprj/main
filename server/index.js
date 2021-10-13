require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("../server/db/index");
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/posts/index");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.use("/api/posts", posts);
// const path = require("path");
// app.get(/.*/, (req, res) =>
//   res.sendFile(path.resolve(__dirname, "../vuejs/dist/index.html"))
// );

// Handle production
const path = require("path");
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
