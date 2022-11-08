const express = require("express");
const cors=require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;
const dataFromApi = require("./data.json");

app.get("/", (req, res) => {
  res.send("you are live enter /api/products");
});

app.get("/api/products", (req, res) => {
  res.send(dataFromApi);
});

app.listen(port, () => {
  console.log("server is listning....");
});
