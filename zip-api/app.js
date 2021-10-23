const express = require("express");
const app = express();

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
  const zipcode = req.params.zipcode;
  res.json(zipdb.byZip[zipcode]);
});

app.get("/city/:cityname", (req, res) => {
  const cityname = req.params.cityname;
  res.json(zipdb.byCity[cityname]);
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
